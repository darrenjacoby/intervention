import React from 'react';
import { useContext, useState } from '@wordpress/element';
import { Button, CustomSelectControl } from '@wordpress/components';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';
// import { arrayHasDuplicates } from '../utils/arr';
import { getRolesAsNiceName, sortAppliedByRoleKeys } from '../../utils/admin';

/**
 * Role Groups
 */
const RoleGroups = () => {
  const { data, setIndex, index } = useContext(AdminContext);

  const options = data.map((item, i) => {
    const name = getRolesAsNiceName(item.roles.group);
    return { key: i, name };
  });

  const handler = (selectedItem) => {
    // setState(value);
    setIndex(selectedItem.key);
  };

  // const [state, setState] = useState(index);

  return (
    <div className="flex flex-wrap items-center">
      <CustomSelectControl
        label="Route"
        hideLabelFromVision={true}
        value={options.find((option) => option.key === index)}
        options={options}
        onChange={({ selectedItem }) => handler(selectedItem)}
      />

      {/*
      {data.map((item, i) => (
        <Button
          key={`role-group-sortable-${i}`}
          className={`
            inline-flex
            items-center
            rounded
            h-[32px]
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
          {item.roles.group.length === 0 && (
            <div className="flex items-center justify-center text-20">
              &#8230;
            </div>
          )}

          <div className="flex h-full">
            {item.roles.group.length > 0 &&
              item.roles.group.map((role, index) => (
                <div key={role} className="flex items-center">
                  {role}
                  {index !== item.roles.group.length - 1 && (
                    <span className="w-1 mx-[3px] h-full bg-gray-2"></span>
                  )}
                </div>
              ))}
          </div>
        </Button>
      ))}
      */}
    </div>
  );
};

export default RoleGroups;
