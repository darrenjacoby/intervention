import React from 'react';
// import { usePrompt } from 'react-router-dom';
import { useState, useEffect, more } from '@wordpress/element';
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
import AdminContext from './AdminContext';
import { sortDataByRoleKeys } from '../utils/admin';
import { __ } from '../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

/*
const objHasProp = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
*/

/**
 * Admin
 */
const Admin = () => {
  const dataInit = { roles: { group: [], immutable: false }, components: [] };
  const [data, setData] = useState([dataInit]);
  const [index, setIndex] = useState(0);
  const [dataIndex, setDataIndex] = useState(dataInit);
  const [isBlocking, setIsBlocking] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const get = () => {
    apiFetch({ method: 'POST', url: intervention.route.admin.url }).then(
      (res) => {
        if (res?.data) {
          const sorted = sortDataByRoleKeys(res.data, index);
          setData(sorted.data);
          setDataIndex(sorted.data[index]);
          setIsBlocking(false);
          setIsLoaded(true);
        }
      }
    );
  };

  useEffect(() => get(), []);
  useEffect(() => setDataIndex(data[index]), [index]);
  // useEffect(() => console.log(dataIndex.components), [dataIndex]);

  /**
   * Render
   */
  return (
    <AdminContext.Provider
      value={{
        data,
        setData,
        index,
        setIndex,
        dataIndex,
        setDataIndex,
        isBlocking,
        setIsBlocking,
      }}
    >
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
    </AdminContext.Provider>
  );
};

export default Admin;
