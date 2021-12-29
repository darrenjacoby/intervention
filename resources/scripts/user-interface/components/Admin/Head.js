import React from 'react';
import RoleGroups from './RoleGroups';
// import RoleGroupEdit from './RoleGroupEdit';
import AddRoleGroup from './AddRoleGroup';
import Save from './Save';
import { __ } from '../../utils/wp';

/**
 * Head
 *
 * @returns <Head />
 */
const Head = () => (
  <div
    className="
      relative
      n:sticky
      n:top-0
      n:md:top-[32px]
      w-full
      flex
      justify-between
      border-b
      border-gray-5
      bg-white
      z-10"
  >
    <div className="flex-1">
      <div
        className="
          flex
          items-center
          justify-between
          h-[50px]
          pl-12
          pr-16"
      >
        <div className="flex">
          <RoleGroups />
          <div className="w-1 h-[50px] bg-gray-5 mx-12"></div>
          {/*<RoleGroupEdit />*/}
        </div>

        <div className="flex items-center">
          <AddRoleGroup />
          <div className="w-8"></div>
          <Save />
        </div>
      </div>
    </div>
  </div>
);

export default Head;
