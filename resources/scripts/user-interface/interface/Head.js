import { Header } from './Head/Header';
import { Name } from './Head/Name';
import { NavLink } from './Head/NavLink';
import { OutboundLink } from './Head/OutboundLink';
import { __, version } from '../utils/wp';

/**
 * Head
 */
const Head = () => {
	return (
		<Header>
			<div className="w-full md:w-auto flex flex-wrap">
				<Name>Intervention</Name>

				<div className="flex flex-wrap items-center">
					<NavLink to="/">{__('Import')}</NavLink>
					<NavLink to="/export">{__('Export')}</NavLink>
				</div>
			</div>

			<div className="hidden md:flex md:flex-wrap items-center">
				<OutboundLink href="https://github.com/darrenjacoby/intervention">
					{__('Documentation')}
				</OutboundLink>

				<div className="h-full flex items-center border-l border-gray-5 pl-12 ml-12 text-14 text-gray-50">
					{version}
				</div>
			</div>
		</Header>
	);
};

export { Head };
