import React from 'react';
import { useContext } from '@wordpress/element';
import { Button } from '@wordpress/components';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';
// import { arrayHasDuplicates } from '../utils/arr';
// import { getRolesAsNiceName, sortAppliedByRoleKeys } from '../utils/admin';

/**
 * Role Groups
 */
const RoleGroups = () => {
  const { applied, index, setIndex } = useContext(AdminContext);

  return (
    <div className="flex flex-wrap items-center">
      {applied.map((item, i) => (
        <Button
          key={`role-group-sortable-${i}`}
          className={`
            inline-flex
            items-center
            rounded
            h-[32px]
            {/*h-[36px]*/}
            px-6
            mr-6
            PY-0
            last:mr-0
            cursor-pointer
            bg-white
            text-13
            lg:text-14
            roles-button
            ${i === index ? 'text-primary-10 is-active' : 'text-gray-50'}
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
        </Button>
      ))}
    </div>
  );
};

export default RoleGroups;
