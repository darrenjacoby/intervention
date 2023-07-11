import { useQuery, useMutation } from 'react-query';
import { useState, useEffect } from '@wordpress/element';
import { RadioControl, Button } from '@wordpress/components';
import { sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Page } from './Page/Page';
import {
	Toolbar,
	ToolbarDivider,
	ToolbarFlex,
	ToolbarTitle,
	ToolbarContent,
} from './Page/Toolbar';
import { Sidebar, SidebarGroup } from './Page/Sidebar';
import { ToolbarContentImported } from './Import/ToolbarContentImported';
import {
	RowNotFound,
	Row,
	RowKey,
	RowValue,
	RowValueFromTo,
} from './Import/Row';
import { __ } from '../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

/**
 * Session Fn
 *
 * @description write/read session storage for `intervention-import-show`.
 *
 * @param {string} write
 * @returns {null|string}
 */
const sessionFn = (write = false) => {
	const key = 'intervention-import-show';

	if (write !== false) {
		sessionStorage.setItem(key, write);
		return;
	}

	return sessionStorage.getItem(key);
};

/**
 * Query Fn
 *
 * @description query Intervention and WordPress data.
 *
 * @returns {object}
 */
const queryFn = async () => {
	return await apiFetch({
		url: intervention.route.import.url,
		method: 'POST',
	});
};

/**
 * Import
 *
 * @description import application config to the WordPress DB.
 *
 * @returns <Import />
 */
const Import = () => {
	/**
	 * Query
	 */
	const query = useQuery('import', queryFn, {
		suspense: true,
	});

	/**
	 * State
	 */
	const session = sessionFn();
	const [show, setShow] = useState(session ? session : 'all');
	const [data, setData] = useState(query.data.items);
	const [diff, setDiff] = useState(query.data.diff);
	const [imported, setImported] = useState({ completed: [], skipped: [] });

	/**
	 * Mutation
	 *
	 * @description save changes to database.
	 */
	const mutation = useMutation(() => {
		return apiFetch({
			url: intervention.route.import.url,
			method: 'POST',
			data: { import: true },
		}).then((res) => {
			setData(res.items);
			setDiff(res.diff);
			setImported(res.imported);
		});
	});

	/**
	 * Effects
	 */
	useEffect(() => {
		sessionFn(show);
	}, [show]);

	/**
	 * Show Determination
	 *
	 * @description filter `data` results to match show selection.
	 *
	 * @return {array}
	 */
	const showDetermination = ({ intervention, database }) => {
		if (show === 'match') return intervention.value === database.value;
		if (show === 'mismatch') return intervention.value !== database.value;
		return true;
	};

	/**
	 * Handler
	 */
	const handler = () => mutation.mutate();

	/**
	 * Render
	 */
	return (
		<Page>
			<Sidebar>
				<SidebarGroup title={__('Show')}>
					<RadioControl
						selected={show}
						options={[
							{ label: __('All'), value: 'all' },
							{ label: __('Mismatch'), value: 'mismatch' },
							{ label: __('Match'), value: 'match' },
						]}
						onChange={(value) => setShow(value)}
					/>
				</SidebarGroup>
			</Sidebar>

			<div className="w-full flex-1">
				<Toolbar>
					<ToolbarFlex>
						<ToolbarTitle>{__('Importer')}</ToolbarTitle>
						<ToolbarContent>
							<ToolbarContentImported imported={imported} />
						</ToolbarContent>
					</ToolbarFlex>

					<ToolbarContent>
						{diff > 0 && (
							<>
								<Button
									className="is-secondary"
									onClick={() => setShow('mismatch')}
								>
									{sprintf(__('Mismatch (%s)'), diff)}
								</Button>
								<ToolbarDivider />
							</>
						)}

						<Button
							className="is-primary"
							onClick={() => handler()}
							disabled={diff === 0}
						>
							{mutation.isLoading ? __('Importing') : __('Import')}
						</Button>
					</ToolbarContent>
				</Toolbar>

				{query.isError && <>{__('Sorry, an error has occured')}.</>}

				{query.isSuccess && (
					<>
						{data.filter(showDetermination).length === 0 && (
							<RowNotFound>{__('Nothing found')}.</RowNotFound>
						)}

						{data
							.filter(showDetermination)
							.map(({ intervention, database }) => (
								<Row key={database.key}>
									<RowKey>{intervention.key}</RowKey>
									<RowValue>
										{intervention.value !== database.value ? (
											<RowValueFromTo
												from={database.value}
												to={intervention.value}
											/>
										) : (
											<span>{String(intervention.value)}</span>
										)}
									</RowValue>
								</Row>
							))}
					</>
				)}
			</div>
		</Page>
	);
};

export { Import, queryFn };
