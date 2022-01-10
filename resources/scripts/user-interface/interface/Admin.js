import React from 'react';
import { useState, useEffect, more } from '@wordpress/element';
import { useAtom } from 'jotai';
import {
  RadioControl,
  Panel,
  PanelBody,
  PanelRow,
} from '@wordpress/components';
import { useQuery } from 'react-query';
import { Page } from './Page/Page';
import { Sidebar } from './Page/Sidebar';
import { Head } from './Admin/Head';
import { Components } from './Admin/Components';
import { ComponentsApplied } from './Admin/ComponentsApplied';
// import { adminDataAtom } from './DataAtoms';
import { queryAtom, dataAtom } from '../atoms/admin';
import { adminQuery } from '../queries';
import { __ } from '../utils/wp';

/**
 * Immutable Role Group
 *
 * @description
 *
 * @returns <ImmutableRoleGroup />
 */
/*
const RoleGroupDiffs = () => {
  const [selectedAppliedDiff] = useAtom(selectedAppliedDiffAtom);

  return (
    <div className="flex">
      <div className="? h-[50px] flex items-center">
        + {selectedAppliedDiff?.additions}
      </div>
      <div className="? h-[50px] flex items-center">
        - {selectedAppliedDiff?.deletions}
      </div>
    </div>
  );
};
*/

/**
 * Admin
 */
const Admin = () => {
  /**
   * Query
   */
  const query = useQuery('admin', adminQuery, {
    suspense: true,
  });

  /**
   * State
   */
  const [, setQuery] = useAtom(queryAtom);
  const [view, setView] = useState('all');

  /**
   * Effects
   *
   * @description set mutable `data` from `wordPressData` which is used for tracking diff purposes.
   */
  useEffect(() => {
    setQuery(query.data);
  }, []);

  /**
   * Render
   */
  return (
    <Page>
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
                selected={view}
                options={[
                  { label: __('All'), value: 'all' },
                  { label: __('Applied'), value: 'applied' },
                  { label: __('Editing'), value: 'editing' },
                ]}
                onChange={(value) => setView(value)}
              />
            </PanelRow>
          </PanelBody>
        </Panel>
      </Sidebar>

      <div className="w-full flex-1">
        <Head />
        {view === 'all' && <Components />}
        {view === 'applied' && <ComponentsApplied />}
      </div>
    </Page>
  );
};

export { Admin };
