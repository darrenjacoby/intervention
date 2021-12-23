import React from 'react';
import { usePrompt } from 'react-router-dom';
import { useState, useEffect, more } from '@wordpress/element';
import {
  RadioControl,
  Panel,
  PanelBody,
  PanelRow,
  Button,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import Page from './Page/Page';
import Sidebar from './Page/Sidebar';
import RoleGroups from './Admin/RoleGroups';
// import Toolbar from './Page/Toolbar';
// import Components from './Admin/_/Components';
import IndexRoleGroup from './Admin/IndexRoleGroup';
import ItemControls from './Admin/ItemControls';
import AdminContext from './AdminContext';
import { __ } from '../utils/wp';
import { arrayHasDuplicates } from '../utils/arr';
import { getRolesAsNiceName, sortAppliedByRoleKeys } from '../utils/admin';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

/**
 * Fetch registered roles from WordPress core function.
 */
const registeredRoles = intervention.route.admin.data.roles;
const registeredRolesKeys = Object.keys(registeredRoles);

/**
 * Admin
 */
const Admin = () => {
  const [applied, setApplied] = useState([
    { roles: [], components: [], immutable: false },
  ]);
  const [index, setIndex] = useState(0);
  const [buttonText, setButtonText] = useState(__('Save'));
  const [isBlocking, setIsBlocking] = useState(false);

  const get = () => {
    apiFetch({
      method: 'POST',
      url: intervention.route.admin.url,
    }).then((res) => {
      if (res?.data) {
        const sorted = sortAppliedByRoleKeys(res.data, 0);
        setApplied(sorted.applied);
        setIsBlocking(false);
      }
    });
  };

  usePrompt(
    __('You have unsaved changes, are you sure you want to leave?'),
    isBlocking
  );

  useEffect(() => get(), []);

  const addRoleGroup = () => {
    const addGroup = [
      ...applied,
      ...[{ roles: [], components: [], immutable: false }],
    ];
    setApplied(addGroup);
    setIndex(applied.length);
  };

  const deleteRoleGroup = () => {
    const indexHasComponents =
      Object.keys(applied[index].components).length > 0;

    if (indexHasComponents) {
      const proceed = window.confirm(
        'Proceed? Deleted group settings will be lost.'
      );
      if (proceed === false) {
        return;
      }
    }

    const removeGroup = applied.filter((item, i) => {
      return i !== index;
    });

    const newIndex = index === 0 ? index : index - 1;

    setApplied(removeGroup);
    setIndex(newIndex);
    setIsBlocking(true);
  };

  /**
   * Add
   *
   * Find `index` in `applied` and add component to the array.
   *
   * @param {string} key
   * @param {any} value
   * @param {boolean} immutable
   */
  const add = (key, value, immutable = false) => {
    const isItemImmutable = (item) => {
      if (key in item.components) {
        return item.components[key][1] === true;
      }
    };

    const added = applied.map((item, i) => {
      if (i === index && !isItemImmutable(item)) {
        item.components[key] = [value, immutable];
      }
      return item;
    });

    setApplied(added);
    setIsBlocking(true);
  };

  /**
   * Remove
   *
   * Find `index` in `applied` and remove component from the array.
   *
   * @param {string} key
   */
  const remove = (key) => {
    const removeItem = (item) => {
      const entries = Object.entries(item.components);
      const removed = entries.reduce((carry, [k, v]) => {
        if (k !== key) {
          carry[k] = v;
        }
        return carry;
      }, {});
      return removed;
    };

    const removed = applied.map((item, i) => {
      if (i === index) {
        item.components = removeItem(item);
      }
      return item;
    });

    setApplied(removed);
    setIsBlocking(true);
  };

  /**
   * Handle Save
   */
  const handleSave = () => {
    setButtonText(__('Saving'));

    console.log(index);

    const save = () => {
      apiFetch({
        url: intervention.route.admin.url,
        method: 'POST',
        data: { applied: middleware, save: true },
      }).then((res) => {
        // get();
        if (res?.data) {
          console.log(res.data);
          const sorted = sortAppliedByRoleKeys(res.data, index);
          console.log(sorted);
          setApplied(sorted.applied);
          setIndex(sorted.index);
          setButtonText(__('Save'));
          setIsBlocking(false);
        }
      });
    };

    const escape = () => {
      setButtonText(__('Save'));
    };

    const rolesAsKeys = applied.reduce((carry, { roles }) => {
      carry.push(roles.join('|'));
      return carry;
    }, []);

    /**
     * Convert to object for saving
     *
     * @returns {object}
     */
    const middleware = applied.reduce((carry, { roles, components }) => {
      /**
       *
       */
      const removeImmutableComponents = Object.entries(components).reduce(
        (carry, [k, [value, immutable]]) => {
          if (immutable !== true) {
            carry[k] = [value, false];
          }
          return carry;
        },
        {}
      );

      // if (Object.keys(components).length > 0) {
      carry[roles.join('|')] = removeImmutableComponents;
      // }
      return carry;
    }, {});

    if (Object.keys(middleware).includes('')) {
      window.alert(
        'You have an empty role group, please assign a role or delete the group to proceed.'
      );

      escape();
      return;
    }

    if (arrayHasDuplicates(rolesAsKeys)) {
      const proceed = window.confirm(
        'Found matching user groups, saving will merge groups.'
      );

      proceed ? save() : escape();
      return;
    }

    save();
  };

  /**
   * Remove Role Group
   *
   * @returns <RemoveRoleGroup />
   */
  /*
  const RoleGroups = () => (
    <div className="flex flex-wrap items-center">
      {applied.map((item, i) => (
        <div
          key={`role-group-sortable-${i}`}
          className={`
            inline-flex
            items-center
            rounded
            h-[32px]
            {/*h-[36px]*/}
            px-6
            mr-6
            cursor-pointer
            bg-white
            text-13
            lg:text-14
            roles-button
            border
            ${
              i === index
                ? 'text-primary-10 border-primary-10'
                : 'text-gray-50 border-gray-2 hover:border-gray-5'
            }
          `}
          onClick={() => setIndex(i)}
        >
          {item.roles.length === 0 && (
            <div className="flex items-center justify-center text-20">
              &#8230;
            </div>
          )}

          <div className="flex h-full">
            {item.roles.length > 0 &&
              item.roles.map((role, index) => (
                <div key={role} className="flex items-center">
                  {role}
                  {index !== item.roles.length - 1 && (
                    <span className="w-1 mx-[3px] h-full bg-gray-2"></span>
                  )}
                  {/*index !== item.roles.length - 1 && (
                    <div className="w-[3px]"></div>
                  )*/}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
  */

  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  const AddRoleGroup = () => (
    <>
      <Button className="is-secondary mr-8" onClick={() => addRoleGroup()}>
        {__('Add')}
      </Button>
    </>
  );

  return (
    <AdminContext.Provider
      value={{
        applied,
        setApplied,
        index,
        add,
        remove,
        addRoleGroup,
        deleteRoleGroup,
        setIndex,
        setIsBlocking,
      }}
    >
      <Page>
        <div className="w-full flex-1">
          {/*
          <Toolbar>
            <div className="flex flex-wrap items-center text-14 text-gray-90">
              <span className="font-500 mr-10">{__('Admin')}</span>
              <div className="w-1 h-[49px] bg-gray-5"></div>
            </div>
            <Button
              className="is-primary"
              onClick={() => handleSave()}
              disabled={isBlocking === false}
            >
              {buttonText}
            </Button>
          </Toolbar>
          */}

          <div
            className="
              relative
              sticky
              top-0
              md:top-[32px]
              w-full
              h-[100px]
              pl-16
              flex
              justify-between
              border-b
              border-gray-5
              bg-white
              z-10"
          >
            <div className="flex items-center h-[48px]">
              <span className="text-14 font-500 text-gray-90 mr-8">
                {__('Roles')}
              </span>
            </div>

            <div className="w-1 h-full bg-gray-5"></div>

            <div className="flex-1">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  h-[50px]
                  pl-12
                  pr-16"
              >
                <RoleGroups />
                <div>
                  {/* <AddRoleGroup /> */}
                  <Button
                    className="is-primary"
                    onClick={() => handleSave()}
                    disabled={isBlocking === false}
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  h-[48px]
                  pl-12
                  pr-16
                  text-13
                  border-t
                  border-gray-5"
              >
                {/* <IndexRoleGroup toggleRoleInGroup={toggleRoleInGroup} /> */}
              </div>
            </div>
          </div>

          {/*!init && <Loader />*/}

          {/*<div className="px-16 py-8">*/}
          <div>
            <h4 className="my-0 py-0 block text-16 text-gray-50 font-400 px-16 border-b border-gray-5 h-[48px] flex items-center">
              {getRolesAsNiceName(applied[index].roles)}
            </h4>

            <div className="flex items-center">
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Login
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Common
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Dashboard
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Posts
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Pages
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Comments
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Appearance
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Plugins
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Users
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-2 text-primary-10">
                Tools
              </div>
              <div className="border-b border-gray-2 h-[36px] flex items-center px-16 text-primary-10">
                Settings
              </div>
            </div>

            <div className="flex flex-wrap border-4 border-primary pt-20 pb-12">
              {Object.entries(applied[index].components).map(
                ([key, [value, immutable]]) => (
                  <div
                    key={key}
                    className={`
                      flex
                      items-center
                      px-8
                      py-4
                      mr-8
                      mb-8
                      border
                      rounded
                      ${
                        immutable
                          ? 'border-gray-5 text-gray-50'
                          : 'border-primary-10 text-primary-10'
                      }
                      `}
                  >
                    {key}
                    {value !== true && value}
                    {immutable === false && <ItemControls item={`${key}`} />}
                  </div>
                )
              )}
            </div>
          </div>
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

          {/* <Components /> */}
        </Sidebar>
      </Page>
    </AdminContext.Provider>
  );
};

export default Admin;
