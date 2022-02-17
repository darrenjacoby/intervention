import { useQuery } from 'react-query';
import { useState, useEffect } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import { Page } from './Page/Page';
import { Toolbar, ToolbarTitle } from './Page/Toolbar';
import {
  Sidebar,
  SidebarGroup,
  SidebarCheckboxFlex,
  SidebarCheckboxItem,
} from './Page/Sidebar';
import { ButtonCopy } from './Export/ButtonCopy';
import { CodeBlock } from './Export/CodeBlock';
import { exportAdminOptions, exportQuery } from '../queries';
import { exportSelectionSession } from '../sessions';
import { sortRolesKeys } from './Admin/Save';
import { __ } from '../utils/wp';

const staticExports = intervention.route.export.data;
// const staticExportsAdminSorted = sortRolesKeys(staticExports.admin);

/**
 * State Factory
 *
 * @description create state object from a `staticExports` group.
 *
 * @param {object} group
 * @param {boolean} state
 * @returns {object}
 */
const stateFactory = (group, state = false) => {
  return group.reduce((carry, item) => {
    carry[item.key] = state ? state.includes(item.key) : true;
    return carry;
  }, {});
};

/**
 * Get Keys Equal To True
 *
 * @description filter group items object to only get keys where state is `true`.
 *
 * @param {object} group
 * @returns {array}
 */
const getKeysEqualToTrue = (group) => {
  return Object.entries(group).reduce((carry, [k, v]) => {
    if (v === true) {
      carry.push(k);
    }
    return carry;
  }, []);
};

/**
 * Is All Checked
 *
 * @description deetermine if a group contains a false value.
 *
 * @returns {boolean}
 */
const isAllChecked = (group) => {
  return Object.values(group).includes(false);
};

/**
 * Export
 *
 * @description export WordPress database options to an Intervention config file.
 *
 * @returns <Export />
 */
const Export = () => {
  /**
   * Query
   */
  const queryAdminOptions = useQuery(
    'export-admin-options',
    exportAdminOptions,
    {
      suspense: true,
    }
  );

  const query = useQuery('export', exportQuery, {
    suspense: true,
  });

  const staticExportsAdminSorted =
    queryAdminOptions.data.length !== 0
      ? sortRolesKeys(queryAdminOptions.data)
      : [];
  const applicationKeys = Object.keys(stateFactory(staticExports.application));
  const session = exportSelectionSession() || applicationKeys;

  /**
   * State
   */
  const [application, setApplication] = useState(
    stateFactory(staticExports.application, session)
  );

  const [admin, setAdmin] = useState(
    stateFactory(staticExportsAdminSorted, session)
  );

  /**
   * Effects
   *
   * @description merge groups, update session storage and refetch query from `UserInterface/Tools/Export.php`.
   */
  useEffect(() => {
    const selected = [
      ...getKeysEqualToTrue(application),
      ...getKeysEqualToTrue(admin),
    ];
    exportSelectionSession(selected);
    query.refetch();
  }, [application, admin]);

  /**
   * Write
   *
   * @description write state for group item checkbox.
   *
   * @param {object} group
   * @param {object} item
   */
  const write = (group, { key, state }) => {
    return Object.entries(group).reduce((carry, [k, v]) => {
      carry[k] = key === k ? state : v;
      return carry;
    }, {});
  };

  /**
   * Write All
   *
   * @description write state for group toggle all checkbox.
   *
   * @param {object} group
   */
  const writeAll = (group) => {
    const state = isAllChecked(group);
    return Object.entries(group).reduce((carry, [k]) => {
      carry[k] = state;
      return carry;
    }, {});
  };

  /**
   * Render
   */
  return (
    <Page>
      <Sidebar>
        <SidebarGroup title={__('Application')}>
          <SidebarCheckboxFlex>
            <SidebarCheckboxItem>
              <CheckboxControl
                label={__('Toggle All', 'intervention')}
                checked={!isAllChecked(application)}
                onChange={() => setApplication(writeAll(application))}
              />
            </SidebarCheckboxItem>

            {staticExports.application.map(({ key, title }) => (
              <SidebarCheckboxItem key={key}>
                <CheckboxControl
                  label={__(title)}
                  checked={application[key] ?? false}
                  onChange={(state) =>
                    setApplication(write(application, { key, state }))
                  }
                />
              </SidebarCheckboxItem>
            ))}
          </SidebarCheckboxFlex>
        </SidebarGroup>

        {staticExportsAdminSorted.length > 0 && (
          <SidebarGroup title={__('Admin')}>
            <SidebarCheckboxFlex>
              <SidebarCheckboxItem>
                <CheckboxControl
                  label={__('Toggle All', 'intervention')}
                  checked={!isAllChecked(admin)}
                  onChange={() => setAdmin(writeAll(admin))}
                />
              </SidebarCheckboxItem>
              {staticExportsAdminSorted.map(({ key, title }) => (
                <SidebarCheckboxItem key={key}>
                  <CheckboxControl
                    label={__(title)}
                    checked={admin[key] ?? false}
                    onChange={(state) => setAdmin(write(admin, { key, state }))}
                  />
                </SidebarCheckboxItem>
              ))}
            </SidebarCheckboxFlex>
          </SidebarGroup>
        )}
      </Sidebar>

      {/* bugfix: w-full strangely wraps the sidebar on smaller screens, w-1/2 stops prismjs doing that */}
      <div className="flex-1 w-1/2">
        <Toolbar>
          <ToolbarTitle>{__('Export')}</ToolbarTitle>
          <ButtonCopy textToCopy={query.data} />
        </Toolbar>

        {query.isError && <>{__('Sorry, an error has occured')}.</>}

        {query.isSuccess && <CodeBlock>{query.data}</CodeBlock>}
      </div>
    </Page>
  );
};

export { Export };
