import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { useAtom } from 'jotai';
import { RadioControl } from '@wordpress/components';
import { useQuery } from 'react-query';
import { Page } from './Page/Page';
import { Sidebar, SidebarGroup } from './Page/Sidebar';
import { Head } from './Admin/Head';
import { Components } from './Admin/Components';
import { ComponentsApplied } from './Admin/ComponentsApplied';
import { adminQuery } from '../queries';
import { queryAtom } from '../atoms/admin';
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
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
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
    // refetch on unmount to ensure query has the latest data
    return () => {
      query.refetch();
    };
  }, []);

  /**
   * Render
   */
  return (
    <Page>
      <Sidebar>
        <SidebarGroup title={__('Show')}>
          <RadioControl
            selected={view}
            options={[
              { label: __('All'), value: 'all' },
              { label: __('Applied'), value: 'applied' },
            ]}
            onChange={(value) => setView(value)}
          />
        </SidebarGroup>
      </Sidebar>

      <div className="w-full flex-1">
        <Head />
        {query.isSuccess && (
          <>
            {view === 'all' && <Components />}
            {view === 'applied' && <ComponentsApplied />}
          </>
        )}
      </div>
    </Page>
  );
};

export { Admin };
