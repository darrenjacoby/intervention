import React from 'react';
import { usePrompt } from 'react-router-dom';
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
import {
  getRolesAsNiceName,
  sortAppliedByRoleKeys,
  getInterventionKey,
} from '../utils/admin';
import { __ } from '../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

const objHasProp = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

/**
 * Admin
 */
const Admin = () => {
  const [applied, setApplied] = useState([
    { roles: [], components: [], immutable: false },
  ]);
  const [index, setIndex] = useState(0);
  const [isBlocking, setIsBlocking] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const get = () => {
    apiFetch({
      method: 'POST',
      url: intervention.route.admin.url,
    }).then((res) => {
      if (res?.data) {
        const sorted = sortAppliedByRoleKeys(res.data, 0);
        setApplied(sorted.applied);
        setIsBlocking(false);
        setIsLoaded(true);
      }
    });
  };

  /**
   * Api
   *
   * @param {array} array
   *    [
   *        [k, value = true]
   *    ]
   */
  const api = ({ add = [], remove = [], toggle = [] }) => {
    /**
     * Update
     *
     * @param {object} item
     * @returns {object}
     */
    const update = (currentIndex) => {
      /**
       * Toggled
       *
       * @description check `applied` key state and route to `add` or `remove`.
       *
       * @param {array} toggle
       * @return {object}
       *    {
       *        add: [ { key, {boolean|string} value } ],
       *        remove: [ {key} ]
       *    }
       */
      const template = { add: [], remove: [] };
      const toggled = toggle.reduce((carry, { key, value = true }) => {
        const appliedKey = getInterventionKey(key);

        if (!objHasProp(currentIndex.components, appliedKey)) {
          carry.add = [...carry.add, { key, value }];
        } else {
          carry.remove = [...carry.remove, { key }];
        }

        return carry;
      }, template);

      /**
       * Added
       *
       * @description merge `add` and `toggled.add` and convert the `path` key for `applied`.
       *
       * @param {array} added
       * @param {array} toggled.add
       * @return {object}
       *    {
       *        key: [ {boolean|string} value, {boolean} immutable ]
       *    }
       */
      const added = [...add, ...toggled.add].reduce(
        (carry, { key, value = true }) => {
          const appliedKey = getInterventionKey(key);
          carry[appliedKey] = [value, false];
          return carry;
        },
        {}
      );

      /**
       * Removed
       *
       * @description merge `remove` and `toggled.removed`, convert the `path` key for `applied` and delete from `currentIndex.components`.
       *
       * @param {array} added
       * @param {array} toggled.add
       * @return {object}
       *    {
       *        key: [ {boolean|string} value, {boolean} immutable ]
       *    }
       */
      const removed = [...remove, ...toggled.remove]
        .map(({ key }) => {
          const appliedKey = getInterventionKey(key);
          return objHasProp(currentIndex.components, appliedKey)
            ? appliedKey
            : false;
        })
        .filter(Boolean);

      removed.map((k) => {
        if (currentIndex.components[k][1] === false) {
          delete currentIndex.components[k];
        }
      });

      /**
       * Return
       *
       * @return {object}
       *    {
       *        roles: {object} roles,
       *        components: {object} components,
       *        immutable: {object} immutable,
       *    }
       */
      return {
        roles: currentIndex.roles,
        components: { ...currentIndex.components, ...added },
        immutable: currentIndex.immutable,
      };
    };

    /**
     * Update
     *
     * @description only update the current index for `applied` components.
     *
     * @param {array} applied
     * @return {array} appliedChanged
     */
    const appliedChanged = applied.reduce((carry, currentIndex, itemIndex) => {
      const result = index === itemIndex ? update(currentIndex) : currentIndex;
      carry.push(result);
      return carry;
    }, []);

    setApplied(appliedChanged);
    setIsBlocking(true);
  };

  /**
   * Is Key Applied
   *
   * @param {string} k
   * @returns {boolean}
   */
  const isKeyApplied = (k) => {
    const key = getInterventionKey(k);
    const componentsKeys = Object.keys(applied[index].components);
    return componentsKeys.includes(key) ? true : false;
  };

  /**
   * Is Key Immutable
   *
   * @param {string} k
   * @returns {boolean}
   */
  const isKeyImmutable = (k) => {
    const key = getInterventionKey(k);
    const components = applied[index].components;
    const valid = Array.isArray(components[key]);
    return valid ? components[key][1] : false;
  };

  usePrompt(
    __('You have unsaved changes, are you sure you want to leave?'),
    isBlocking
  );

  useEffect(() => get(), []);

  /**
   * Render
   */
  return (
    <AdminContext.Provider
      value={{
        api,
        applied,
        index,
        isBlocking,
        setApplied,
        setIndex,
        setIsBlocking,
        isKeyApplied,
        isKeyImmutable,
      }}
    >
      <Page>
        <div className="w-full flex-1">
          <Head />

          <h2
            className="
              my-0
              py-0
              block
              text-16
              text-gray-50
              font-400
              px-16
              border-b
              border-gray-5
              h-[50px]
              flex
              items-center"
          >
            {getRolesAsNiceName(applied[index].roles)}
          </h2>

          <div className={`w-full ${isLoaded === false ? 'hidden' : ''}`}>
            <Components />
          </div>

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

          <div className="flex flex-wrap p-16">
            {Object.entries(applied[index].components).map(
              ([key, [value, immutable]]) => (
                <div
                  key={key}
                  className="
                    flex
                    items-center
                    px-6
                    py-4
                    mr-8
                    mb-8
                    border
                    rounded
                    border-gray-5
                    text-gray-20
                  "
                >
                  {key}
                  {value !== true && value}
                  {/*immutable === false && <ItemControls item={`${key}`} />*/}
                </div>
              )
            )}
          </div>
        </Sidebar>
      </Page>
    </AdminContext.Provider>
  );
};

export default Admin;
