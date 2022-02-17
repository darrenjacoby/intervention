import { useQuery } from 'react-query';
import { useAtom } from 'jotai';
import { useState, useEffect } from '@wordpress/element';
import { RadioControl } from '@wordpress/components';
import { Page } from './Page/Page';
import { Sidebar, SidebarGroup } from './Page/Sidebar';
import { Head } from './Admin/Head';
import { Components } from './Admin/Components';
import { ComponentsApplied } from './Admin/ComponentsApplied';
import { adminQuery } from '../queries';
import { queryAtom } from '../atoms/admin';
import { adminShowSession } from '../sessions';
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

  console.log({ query: query });

  /**
   * State
   */
  const session = adminShowSession();
  const [, setQuery] = useAtom(queryAtom);
  const [show, setShow] = useState(session ? session : 'all');

  /**
   * Effects
   *
   * @description set mutable `data` from `wordPressData` which is used for tracking diff purposes.
   */
  useEffect(() => {
    /*
    console.log({ query: query.status });
    if (query.isSuccess) {
      setQuery(query.data);
    }
    */
    setQuery(query.data);

    // refetch on unmount to ensure query has the latest data
    return () => {
      query.refetch();
    };
  }, []);

  useEffect(() => {
    adminShowSession(show);
  }, [show]);

  /**
   * Render
   */
  return (
    <Page>
      <Sidebar>
        <SidebarGroup title={__('Show')}>
          <RadioControl
            selected={show}
            options={[
              { label: __('All'), value: 'all' },
              { label: __('Applied'), value: 'applied' },
            ]}
            onChange={(value) => setShow(value)}
          />
        </SidebarGroup>
      </Sidebar>

      <div className="w-full flex-1">
        {query.isSuccess && (
          <>
            <Head />
            {show === 'all' && <Components />}
            {show === 'applied' && <ComponentsApplied />}
          </>
        )}
      </div>
    </Page>
  );
};

export { Admin };
