import React from 'react';
import { usePrompt } from 'react-router-dom';
import { useState, useEffect, useContext } from '@wordpress/element';
import { Button, Icon, TabPanel } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
// import isEqual from 'lodash.isequal';
import Page from './Page/Page';
import Sidebar from './Page/Sidebar';
import Toolbar from './Page/Toolbar';
import Components from './Admin/Components';
import AdminContext from './AdminContext';
import { __ } from '../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

const registeredRoles = intervention.route.admin.data.roles;
const registeredRolesKeys = Object.keys(registeredRoles);

const appliedImmutableMiddleware = (array) => {
  return Object.entries(array).map(([key, value]) => {
    return [key, value, true];
  });
};

const ItemControls = ({ item }) => {
  const { remove } = useContext(AdminContext);

  return (
    <Icon
      className="
        ml-4
        inline-flex
        items-center
        justify-center
        bg-primary
        text-white
        rounded-full
        text-14
        p-0
        w-16
        h-16
        cursor-pointer"
      onClick={() => {
        console.log(item);
        remove(item);
      }}
      icon="minus"
    />
  );
};

/**
 * Admin
 */
const Admin = () => {
  // const storage = sessionStorage.getItem('intervention-tools-import-radio');
  // const [init, setInit] = useState(false);
  // const [diff, setDiff] = useState(0);
  // const [data, setData] = useState([]);
  const storage = sessionStorage.getItem('intervention-admin-roles');
  const [applied, setApplied] = useState({});
  const [appliedImmutable, setAppliedImmutable] = useState([]);
  const [roles, setRoles] = useState(storage ? JSON.parse(storage) : []);
  const [render, setRender] = useState({});
  const [buttonText, setButtonText] = useState(__('Save'));
  const [isBlocking, setIsBlocking] = useState(false);
  const [isActive, setIsActive] = useState(registeredRolesKeys[0]);

  usePrompt(
    'You have unsaved changes, are you sure you want to leave?',
    isBlocking
  );

  /**
   * Init
   */
  useEffect(() => {
    apiFetch({
      method: 'POST',
      url: intervention.route.admin.url,
    }).then((res) => {
      console.log('DB REQUEST');
      console.log(res);
      if (res?.saved) {
        setApplied(res.saved);
        setIsBlocking(false);
      }
      if (res?.configfile) {
        setAppliedImmutable(appliedImmutableMiddleware(res.configfile));
      }
    });
  }, []);

  /**
   * `applied` and `appliedImmutable`
   */
  /*
  useEffect(() => {
    const appliedArray = Object.entries(applied);
    const merged = [...appliedImmutable, ...appliedArray];

    const getRolesFromApplied = merged.reduce(
      (carry, [k, value, immutable = false]) => {
        const key = k.split('.');
        const role = key.shift();
        const item = key.join('.');

        if (!carry[role]) {
          carry[role] = [];
        }

        carry[role][item] = [value, immutable];

        return carry;
      },
      []
    );

    setRender(getRolesFromApplied);
  }, [applied, appliedImmutable]);
  */

  useEffect(() => {
    const appliedArray = Object.entries(applied);
    const merged = [...appliedImmutable, ...appliedArray];

    /**
     * Get Roles From Applied
     *
     * @return [
     *    {role}: [
     *        {item}: {
     *            value: {value|string},
     *            immutable: {immutable|boolean},
     *         }
     *    ]
     * ]
     */
    const getRolesFromApplied = merged.reduce(
      (carry, [k, value, immutable = false]) => {
        const key = k.split('.');
        const role = key.shift();
        const item = key.join('.');

        if (!carry[role]) {
          carry[role] = [];
        }

        carry[role][item] = { value, immutable };
        return carry;
      },
      []
    );

    /**
     * Get Registered Roles From Applied
     *
     * @return [
     *   {
     *      name: {name|string},
     *      title: {title|string},
     *      className: {className|string},
     *    }
     * ]
     */
    const getRegisteredRolesFromApplied = registeredRolesKeys.reduce(
      (carry, role) => {
        if (getRolesFromApplied[role] === undefined) {
          carry[role] = [];
        } else {
          carry[role] = getRolesFromApplied[role];
        }
        return carry;
      },
      {}
    );

    setRender(getRegisteredRolesFromApplied);
  }, [applied, appliedImmutable]);

  /**
   * Applied
   */
  useEffect(() => {
    console.log('SAVING');
    console.log(applied);
  }, [applied]);

  /**
   * Render
   */
  useEffect(() => {
    console.log('RENDER');
    console.log(render);
  }, [render]);

  /**
   * Roles
   */
  useEffect(() => {
    sessionStorage.setItem('intervention-admin-roles', JSON.stringify(roles));
  }, [roles]);

  /**
   * Add
   *
   * @param {string} key
   * @param {any} value
   */
  const add = (key, value = true) => {
    const adding = roles.reduce((carry, role) => {
      carry[`${role}.${key}`] = value;
      return carry;
    }, {});
    setApplied({ ...applied, ...adding });
    setIsBlocking(true);
  };

  /**
   * Remove
   *
   * @param {string} key
   */
  const remove = (key) => {
    let obj = applied;
    delete obj[key];
    setApplied({ ...obj });
    setIsBlocking(true);
  };

  /**
   * Handle Save
   */
  const handleSave = () => {
    setButtonText(__('Saving'));

    apiFetch({
      url: intervention.route.admin.url,
      method: 'POST',
      data: { applied: applied, save: true },
    }).then((res) => {
      setButtonText(__('Save'));
      setIsBlocking(false);
    });
  };

  return (
    <AdminContext.Provider value={{ applied, add, remove, roles, setRoles }}>
      <Page>
        <div className="w-full flex-1">
          <Toolbar>
            <div className="flex flex-wrap items-center text-14 text-gray-90">
              <span className="font-500 mr-10">{__('Admin')}</span>
              <div className="w-1 h-[49px] bg-gray-5"></div>
              {/*
              <div className="flex h-[49px] items-center pl-16 text-primary-10 underline">
                20 diffs
              </div>
              */}
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
            <div className="flex flex-wrap">
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  border-2
                  border-primary
                "
              >
                {registeredRolesKeys.map((role) => (
                  <div
                    key={`${role}`}
                    className="
                      p-10
                      border-2
                      border-primary
                      cursor-pointer
                    "
                    onClick={() => {
                      setIsActive(role);
                    }}
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {registeredRolesKeys.map((role) => (
              <div
                key={`${role}-items`}
                className={`
                  p-10
                  border-2
                  border-primary
                  ${isActive === role ? 'block' : 'hidden'}
                `}
              >
                <h2 className="font-400 text-gray-50">{role}</h2>

                <div className="flex flex-wrap border-2 border-primary">
                  {render[role] &&
                    Object.entries(render[role]).map(
                      ([key, { value, immutable }]) => (
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
                          {immutable === false && (
                            <ItemControls item={`${role}.${key}`} />
                          )}
                        </div>
                      )
                    )}
                </div>
              </div>
            ))}

            {/*
            {Object.entries(render).map(([role, items]) => {
              return (
                <div
                  key={role}
                  className="w-full border-2 border-primary mb-20 last:mb-0"
                >
                  <h2 className="font-400 text-gray-50">{role}</h2>

                  <div className="flex flex-wrap border-2 border-primary">
                    {Object.entries(items).map(
                      ([key, [value, immutable = false]]) => {
                        return (
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
                            {immutable === false && (
                              <ItemControls item={`${role}.${key}`} />
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
            */}
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
