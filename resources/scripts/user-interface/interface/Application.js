import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { useQuery, useMutation } from 'react-query';
import { RadioControl } from '@wordpress/components';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Page } from './Page/Page';
import {
  Toolbar,
  ToolbarFlex,
  ToolbarTitle,
  ToolbarContent,
} from './Page/Toolbar';
import { Sidebar, SidebarGroup } from './Page/Sidebar';
import { ToolbarContentRender } from './Application/ToolbarContentRender';
import {
  RowNotFound,
  Row,
  RowKey,
  RowValue,
  RowValueFromTo,
} from './Application/Row';
import { __ } from '../utils/wp';
import { applicationQuery } from '../queries';
import { applicationRadioSession } from '../sessions';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

/**
 * Application
 *
 * @description import application config to the WordPress database.
 *
 * @returns <Application />
 */
const Application = () => {
  /**
   * Query
   */
  const query = useQuery('application', applicationQuery, {
    suspense: true,
  });

  /**
   * State
   */
  const session = applicationRadioSession();
  const [radio, setRadio] = useState(session ? session : 'all');
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
      url: intervention.route.application.url,
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
    applicationRadioSession(radio);
  }, [radio]);

  /**
   * Rules
   *
   * @description filter `data` results to match radio selection.
   *
   * @return {array}
   */
  const rules = ({ intervention, database }) => {
    if (radio === 'match') return intervention.value === database.value;
    if (radio === 'mismatch') return intervention.value !== database.value;
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
            selected={radio}
            options={[
              { label: __('All'), value: 'all' },
              { label: __('Mismatch'), value: 'mismatch' },
              { label: __('Match'), value: 'match' },
            ]}
            onChange={(value) => setRadio(value)}
          />
        </SidebarGroup>
      </Sidebar>

      <div className="w-full flex-1">
        <Toolbar>
          <ToolbarFlex>
            <ToolbarTitle>{__('Application')}</ToolbarTitle>
            <ToolbarContent>
              <ToolbarContentRender
                imported={imported}
                diff={diff}
                setRadio={setRadio}
              />
            </ToolbarContent>
          </ToolbarFlex>

          <Button
            className="is-primary"
            onClick={() => handler()}
            disabled={diff === 0}
          >
            {mutation.isLoading ? __('Importing') : __('Import')}
          </Button>
        </Toolbar>

        {query.isError && (
          <>
            {__(
              'Sorry, an error has occured while attempting to access database options'
            )}
            .
          </>
        )}

        {query.isSuccess && (
          <>
            {data.filter(rules).length === 0 && (
              <RowNotFound>{__('Nothing found')}.</RowNotFound>
            )}

            {data.filter(rules).map(({ intervention, database }) => (
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

export { Application };
