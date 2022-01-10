import { useState, useEffect } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import { useQuery } from 'react-query';
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
import { __ } from '../utils/wp';
import { exportQuery } from '../queries';
import { exportSelectionSession } from '../sessions';

const staticExports = intervention.route.export.data.exports;

/**
 * Get Checked items
 *
 * @description filter `checkedItems` to only get keys where state is `true`.
 *
 * @param {Map} items
 * @returns {string}
 */
const getCheckedItems = (checkedItems) => {
  const getKeysEqualToTrue = [...checkedItems.entries()].reduce(
    (carry, item) => {
      const [k, v] = item;
      if (v === true) {
        carry.push(k);
      }
      return carry;
    },
    []
  );
  return getKeysEqualToTrue;
};

/**
 * Set Checked Items
 *
 * @description set all keys to `true` for toggling all on.
 *
 * @param {boolean} state
 * @returns {Map}
 */
const setCheckedItems = (state = true) => {
  const groupListMap = new Map();

  staticExports.map((item) => {
    Array.isArray(state)
      ? groupListMap.set(item.id, state.includes(item.id))
      : groupListMap.set(item.id, state);
  });

  return groupListMap;
};

/**
 * Group Contains False
 *
 * @description deetermine if `checkedItems` contains a false value.
 *
 * @returns {boolean}
 */
const groupContainsFalse = (checkedItems) => {
  const valuesArray = Array.from(checkedItems.values());
  return valuesArray.includes(false);
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
  const query = useQuery('export', exportQuery, {
    suspense: true,
  });

  /**
   * State
   */
  const [checked, setChecked] = useState({
    items: exportSelectionSession()
      ? setCheckedItems(exportSelectionSession())
      : setCheckedItems(true),
  });

  /**
   * Effects
   *
   * Fetch new response from `UserInterface/Tools/Export.php`.
   */
  useEffect(() => {
    const groups = getCheckedItems(checked.items);
    exportSelectionSession(groups);
    query.refetch();
  }, [checked]);

  /**
   * Handler
   *
   * Change `checked.items` to new group states.
   *
   * @param {Map} group
   * @param {boolean} state
   */
  const handler = (group, state) => {
    setChecked({ items: checked.items.set(group, state) });
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
                checked={!groupContainsFalse(checked.items)}
                onChange={() =>
                  setChecked({
                    items: setCheckedItems(groupContainsFalse(checked.items)),
                  })
                }
              />
            </SidebarCheckboxItem>

            {staticExports.map(({ id, title }) => (
              <SidebarCheckboxItem key={id}>
                <CheckboxControl
                  label={__(title)}
                  checked={checked.items.get(id) ?? false}
                  onChange={(state) => handler(id, state)}
                />
              </SidebarCheckboxItem>
            ))}
          </SidebarCheckboxFlex>
        </SidebarGroup>
      </Sidebar>

      {/* bugfix: w-full strangely wraps the sidebar on smaller screens, w-1/2 stops prismjs doing that */}
      <div className="flex-1 w-1/2">
        <Toolbar>
          <ToolbarTitle>{__('Export')}</ToolbarTitle>
          <ButtonCopy textToCopy={query.data} />
        </Toolbar>

        {query.isError && (
          <>
            {__(
              'Sorry, an error has occured while attempting to access database options'
            )}
            .
          </>
        )}

        {query.isSuccess && <CodeBlock>{query.data}</CodeBlock>}
      </div>
    </Page>
  );
};

export { Export, getCheckedItems, setCheckedItems };
