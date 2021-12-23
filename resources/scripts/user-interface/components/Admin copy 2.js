import React from 'react';
import { usePrompt } from 'react-router-dom';
import { useState, useEffect, useContext } from '@wordpress/element';
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

const appliedImmutableMiddleware = (array) => {
  return Object.entries(array).map(([key, value]) => {
    return [key, value, true];
  });
};

/**
 * Admin
 */
const Admin = () => {
  // const [init, setInit] = useState(false);
  // const [diff, setDiff] = useState(0);
  // const [data, setData] = useState([]);
  // const storage = sessionStorage.getItem('intervention-admin-roles');
  // const [roles, setRoles] = useState(storage ? JSON.parse(storage) : []);
  const [applied, setApplied] = useState([{ roles: [], components: [] }]);
  const [appliedImmutable, setAppliedImmutable] = useState([]);
  const [render, setRender] = useState([]);
  const [buttonText, setButtonText] = useState(__('Save'));
  const [isBlocking, setIsBlocking] = useState(false);
  const [isActive, setIsActive] = useState(registeredRolesKeys[0]);
  const [index, setIndex] = useState(0);

  /*
  const appliedAddIndex = () => {
    const init = [{ roles: [], components: [] }];
    setApplied([...applied, ...init]);
  };
  */

  const toggleIndexRole = (role) => {
    let data = applied;

    const add = () => {
      data[index].roles.push(role);
    };
    const remove = () => {
      const remove = data[index].roles.filter((item) => item !== role);
      data[index].roles = remove;
    };

    data[index].roles.includes(role) ? remove() : add();

    setApplied([...data]);
    setIsBlocking(true);
  };

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
      if (res?.saved) {
        setApplied(res.saved);
        setIsBlocking(false);
      }
      if (res?.configfile) {
        setAppliedImmutable(appliedImmutableMiddleware(res.configfile));
      }
    });
  }, []);

  useEffect(() => {
    // const appliedArray = Object.entries(applied);
    // const merged = [...appliedImmutable, ...appliedArray];

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
    /*
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
    */

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
    /*
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
    */

    setRender(applied);
  }, [applied, appliedImmutable]);

  /**
   * Applied
   */
  useEffect(() => {
    console.log('applied obj');
    console.log(applied);
  }, [applied]);

  /**
   * Roles
   */
  /*
  useEffect(() => {
    let changeIndexRoles = applied;
    changeIndexRoles[index].roles = roles;
    setApplied(changeIndexRoles);
    setIsBlocking(true);
  }, [roles]);
  */

  /**
   * Add
   *
   * @param {string} key
   * @param {any} value
   */
  /*
  const add = (key, value = true) => {
    const adding = roles.reduce((carry, role) => {
      carry[`${role}.${key}`] = value;
      return carry;
    }, {});
    setApplied({ ...applied, ...adding });
    setIsBlocking(true);
  };
  */
  const add = () => {
    console.log('add');
  };

  /**
   * Remove
   *
   * @param {string} key
   */
  /*
  const remove = (key) => {
    let obj = applied;
    delete obj[key];
    setApplied({ ...obj });
    setIsBlocking(true);
  };
  */
  const remove = () => {
    console.log('remove');
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
    <AdminContext.Provider value={{ applied, setApplied, index }}>
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
            {/*
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
            */}

            <IndexRoleGroup toggleIndexRole={toggleIndexRole} />

            {/**
             * List view
             */}
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
                <div className="flex flex-wrap border-2 border-primary">
                  {/*
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
                    */}
                </div>
              </div>
            ))}
            {/**
             * End: List view
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
