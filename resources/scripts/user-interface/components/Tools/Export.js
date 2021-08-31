import { useState, useEffect, more } from '@wordpress/element';
import {
  CheckboxControl,
  Panel,
  PanelBody,
  PanelRow,
  ExternalLink,
} from '@wordpress/components';
import { sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import CodeBlock from '../Page/CodeBlock';
import Box from '../Page/Box';
import Sidebar from '../Page/Sidebar';
import Toolbar from '../Page/Toolbar';
import ToolbarFromTo from '../Page/ToolbarFromTo';
import ButtonCopy from '../Page/ButtonCopy';
import Loader from '../Page/Loader';
import Notice from '../Page/Notice';
import { __ } from '../../utils/wp';

/**
 * Group List
 *
 * List of checkbox items which can be filtered.
 */
const groupList = [
  { id: 'theme', title: 'Theme' },
  { id: 'plugins', title: 'Plugins' },
  { id: 'general', title: 'General' },
  { id: 'writing', title: 'Writing' },
  { id: 'reading', title: 'Reading' },
  { id: 'discussion', title: 'Discussion' },
  { id: 'media', title: 'Media' },
  { id: 'permalinks', title: 'Permalinks' },
  { id: 'privacy', title: 'Privacy' },
];

/**
 * WordPress Fetch Nonce
 */
apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

/**
 * Fetch Get Checked Items
 *
 * Filter/reduce `checkedItems` to only get keys with state `true`.
 *
 * @param {Map} items
 * @returns {string}
 */
const getListItems = (checkedItems) => {
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
 * Set List
 *
 * Fetch `groupList` and set all keys to `true`, used for `toggle all`.
 *
 * @param {boolean} state
 * @returns {Map}
 */
const setList = (state = true) => {
  const groupListMap = new Map();

  groupList.map((item) => {
    Array.isArray(state)
      ? groupListMap.set(item.id, state.includes(item.id))
      : groupListMap.set(item.id, state);
  });

  return groupListMap;
};

/**
 * List Has False
 *
 * Used for `toggle all` controls.
 *
 * @returns {boolean}
 */
const listHasFalse = (checkedItems) => {
  const valuesArray = Array.from(checkedItems.values());
  return valuesArray.includes(false);
};

/**
 * Export
 */
const Export = () => {
  const storage = sessionStorage.getItem('intervention-tools-export-groups');

  const [checked, setChecked] = useState({
    items: storage ? setList(JSON.parse(storage)) : setList(true),
  });

  const [codeBlock, setCodeBlock] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Change`checked`
   *
   * Fetch new response from `UserInterface/Tools/Export.php`.
   */
  useEffect(() => {
    setLoading(true);
    const groups = getListItems(checked.items);

    /**
     * Fetch the code preview from `Export.php`.
     */
    apiFetch({
      url: intervention.route.export.url,
      method: 'POST',
      data: { groups: groups },
    }).then((res) => {
      setCodeBlock(res);
      setLoading(false);
    });

    /**
     * Save session storage.
     */
    sessionStorage.setItem(
      'intervention-tools-export-groups',
      JSON.stringify(groups)
    );
  }, [checked]);

  /**
   * Handle Change
   *
   * Change `checked.items` to new group states.
   *
   * @param {Map} group
   * @param {boolean} state
   */
  const handleChange = (group, state) => {
    setChecked({ items: checked.items.set(group, state) });
  };

  /**
   * Render
   */
  return (
    <Box title={__('Export', 'intervention')}>
      <div className="flex flex-wrap w-full">
        <Sidebar>
          <Panel className="border-0 border-b border-gray-5">
            <PanelBody
              title={__('Application', 'intervention')}
              icon={more}
              initialOpen={true}
              className="w-full"
            >
              <PanelRow>
                <div className="flex flex-wrap w-full">
                  <div className="w-1/2 md:w-1/4 lg:w-full xl:w-1/2 2xl:w-1/3 mb-8">
                    <CheckboxControl
                      label={__('Toggle All', 'intervention')}
                      checked={!listHasFalse(checked.items)}
                      onChange={() =>
                        setChecked({
                          items: setList(listHasFalse(checked.items)),
                        })
                      }
                    />
                  </div>

                  {groupList.map(({ id, title }) => (
                    <div
                      key={id}
                      className="w-1/2 md:w-1/4 lg:w-full xl:w-1/2 2xl:w-1/3 mb-8"
                    >
                      <CheckboxControl
                        label={__(title)}
                        checked={checked.items.get(id) ?? false}
                        onChange={(state) => handleChange(id, state)}
                      />
                    </div>
                  ))}
                </div>
              </PanelRow>
            </PanelBody>
          </Panel>
        </Sidebar>

        {/* bugfix: w-full strangely wraps the sidebar on smaller screens, w-1/2 stops prismjs doing that */}
        <div className="flex-1 w-1/2">
          <Toolbar>
            <ToolbarFromTo from={__('Database')} to="Intervention" />
            <ButtonCopy textToCopy={codeBlock} />
          </Toolbar>

          <Notice>
            <span>
              {sprintf(
                __('Export the database to an %s config file'),
                '`intervention.php`'
              )}
              .
            </span>
            <ExternalLink
              href="https://github.com/soberwp/intervention/blob/master/.github/application-export.md"
              className="pl-4"
            >
              {__('Why')}?
            </ExternalLink>
          </Notice>

          {codeBlock === false && <Loader />}

          <CodeBlock loading={loading}>{codeBlock}</CodeBlock>
        </div>
      </div>
    </Box>
  );
};

export default Export;
