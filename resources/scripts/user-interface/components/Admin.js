import React from 'react';
import { useEffect, more } from '@wordpress/element';
import { useAtom } from 'jotai';
import {
  RadioControl,
  Panel,
  PanelBody,
  PanelRow,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import Page from './Page/Page';
import Sidebar from './Page/Sidebar';
import Head from './Admin/Head';
import Components from './Admin/Components';
import { dataAtom, selectedIndexAtom } from './AdminAtoms';
import { sortDataByRoleKeys } from '../utils/admin';
import { __ } from '../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

/**
 * Admin
 */
const Admin = () => {
  const [, setData] = useAtom(dataAtom);
  const [selectedIndex] = useAtom(selectedIndexAtom);

  /**
   * Get (change to react-query)
   *
   * @description
   */
  const get = () => {
    apiFetch({ method: 'POST', url: intervention.route.admin.url }).then(
      (res) => {
        if (res?.data) {
          const sorted = sortDataByRoleKeys(res.data, selectedIndex);
          setData(sorted.data);
          // setIsBlocking(false);
          // setIsLoaded(true);
        }
      }
    );
  };

  useEffect(() => get(), []);
  // useEffect(() => setDataIndex(data[selectedIndex]), [selectedIndex]);
  // useEffect(() => console.log(dataIndex.components), [dataIndex]);

  /**
   * Render
   */
  return (
    <Page>
      <div className="w-full flex-1">
        <Head />
        <Components />
        {/*!init && <Loader />*/}
      </div>

      <Sidebar>
        <Panel className="border-0 border-b border-gray-5">
          <PanelBody
            title={__('Show')}
            icon={more}
            initialOpen={true}
            className="w-full"
          >
            <PanelRow>
              <RadioControl
                selected="all"
                options={[
                  { label: __('All'), value: 'all' },
                  { label: __('Applied'), value: 'applied' },
                ]}
                onChange={(value) => console.log(value)}
              />
            </PanelRow>
          </PanelBody>
        </Panel>
      </Sidebar>
    </Page>
  );
};

export default Admin;
