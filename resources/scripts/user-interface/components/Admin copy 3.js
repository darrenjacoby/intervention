import React from 'react';
import { usePrompt } from 'react-router-dom';
import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import Page from './Page/Page';
import Sidebar from './Page/Sidebar';
import Toolbar from './Page/Toolbar';
import Components from './Admin/Components';
import IndexRoleGroup from './Admin/IndexRoleGroup';
import ItemControls from './Admin/ItemControls';
import AdminContext from './AdminContext';
import { __ } from '../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

const registeredRoles = intervention.route.admin.data.roles;
const registeredRolesKeys = Object.keys(registeredRoles);

/*
const appliedImmutableMiddleware = (array) => {
  const formatter = Object.entries(array).reduce((carry, [k, value]) => {
    const key = k.split('.');
    const role = key.shift();
    const item = key.join('.');

    if (!carry[role]) {
      carry[role] = { components: [], roles: [] };
    }

    carry[role].id = role;
    carry[role].components.push({ key: item, value, immutable: true });
    carry[role].roles = role.split('|');
    return carry;
  }, []);

  return Object.values(formatter);
};
*/

const sortRoles = (sort) => {
  return registeredRolesKeys.filter((v) => sort.includes(v));
};

const appliedFactory = [{ roles: [], components: [], immutable: false }];

/**
 * Admin
 */
const Admin = () => {
  const [applied, setApplied] = useState(appliedFactory);
  // const [appliedImmutable, setAppliedImmutable] = useState(appliedFactory);
  // const [render, setRender] = useState(appliedFactory);
  const [index, setIndex] = useState(0);

  const [buttonText, setButtonText] = useState(__('Save'));
  const [isBlocking, setIsBlocking] = useState(false);
  const [isActive, setIsActive] = useState(registeredRolesKeys[0]);

  usePrompt(
    'You have unsaved changes, are you sure you want to leave?',
    isBlocking
  );

  useEffect(() => {
    apiFetch({
      method: 'POST',
      url: intervention.route.admin.url,
    }).then((res) => {
      /*
      if (res?.configfile) {
        setAppliedImmutable(appliedImmutableMiddleware(res.configfile));
      }
      */
      if (res?.data) {
        setApplied(res.data);
        setIsBlocking(false);
      }
    });
  }, []);

  useEffect(() => {
    console.log('applied:');
    console.log(applied);
  }, [applied]);

  /*
  useEffect(() => {
    console.log('appliedImmutable:');
    console.log(appliedImmutable);
  }, [appliedImmutable]);
  */

  /*
  useEffect(() => {
    setRender([...appliedImmutable, ...applied]);
    console.log(render);
  }, [applied, appliedImmutable]);
  */

  /*
  useEffect(() => {
    const update = appliedImmutable.reduce((updated, codedItem) => {
      const codedItemRoles = codedItem.roles.length ? codedItem.roles : false;

      if (codedItemRoles === false) {
        return;
      }

      const match = applied.reduce((index, appliedItem, i) => {
        if (isEqual(appliedItem.roles, codedItemRoles)) {
          index = i;
        }
        return index;
      }, false);

      if (match !== false) {
        updated = applied.map((item, i) => {
          if (i === match) {
            item.components = [...codedItem.components, ...item.components];
          }
          return item;
        });
      } else {
        updated = [...applied, codedItem];
      }

      return updated;
    }, applied);

    console.log(update);

    setApplied(update);
  }, [appliedImmutable]);
  */

  /**
   * Toggle Index Role
   *
   * @param {string} role
   */
  const indexToggleRole = (role) => {
    const add = (item) => [...item.roles, role];
    const remove = (item) => item.roles.filter((item) => item !== role);

    const appliedIndexRole = applied.map((item, i) => {
      if (i === index) {
        item.roles = item.roles.includes(role) ? remove(item) : add(item);
        item.roles = sortRoles(item.roles);

        /*
        const match =
          JSON.stringify(item.roles) === JSON.stringify(registeredRolesKeys);

        if (match) { item.roles = ['all'] }
        */
      }
      return item;
    });

    setApplied(appliedIndexRole);
    setIsBlocking(true);
  };

  /**
   *
   */
  const addRoleGroup = () => {
    const addGroup = [...applied, ...[appliedFactory]];
    setApplied(addGroup);
    setIndex(applied.length);
  };

  const deleteRoleGroup = () => {
    const proceed = window.confirm(
      'Proceed? Deleted group settings will be lost.'
    );
    if (proceed === false) {
      return;
    }

    const removeGroup = applied.filter((item, i) => {
      return i !== index;
    });
    setApplied(removeGroup);
    if (index === 0) {
      setIndex(index);
    } else {
      setIndex(index - 1);
    }
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
    const added = applied.map((item, i) => {
      if (i === index) {
        item.components.push({ key, value, immutable });
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
    const removeItem = (item) =>
      item.components.filter((item) => item.key !== key);

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

    /**
     * Convert to object for saving
     *
     * @returns {object}
     */
    const getAppliedObject = () => {
      return applied.reduce((carry, { roles, components }) => {
        carry[roles.join('|')] = components;
        return carry;
      }, {});
    };

    apiFetch({
      url: intervention.route.admin.url,
      method: 'POST',
      data: { applied: getAppliedObject(), save: true },
    }).then((res) => {
      setButtonText(__('Save'));
      setIsBlocking(false);
    });
  };

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

          {/*!init && <Loader />*/}

          <div className="p-16">
            <IndexRoleGroup indexToggleRole={indexToggleRole} />

            <h4 className="text-20 text-gray-50 font-400 mb-16">added</h4>

            <div className="flex flex-wrap border-4 border-primary pt-20 pb-12">
              {applied[index].components.map(({ key, value, immutable }) => (
                <div
                  key={key}
                  className={`
                        flex
                        items-center
                        px-6
                        py-4
                        mr-8
                        mb-8
                        border
                        rounded
                      ${
                        immutable
                          ? 'border-gray-5 text-gray-40'
                          : 'border-primary-10 text-primary-10'
                      }
                      `}
                >
                  {key}
                  {value !== true && value}
                  {immutable === false && <ItemControls item={`${key}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Sidebar>
          <Components />
        </Sidebar>
      </Page>
    </AdminContext.Provider>
  );
};

export default Admin;
