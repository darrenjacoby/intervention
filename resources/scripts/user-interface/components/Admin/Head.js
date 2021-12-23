import React from 'react';
import RoleGroups from './RoleGroups';
import RoleGroupEdit from './RoleGroupEdit';
import AddRoleGroup from './AddRoleGroup';
import ButtonSave from './ButtonSave';
import { __ } from '../../utils/wp';

/**
 * Head
 */
const Head = () => {
  {
    /*
      <Toolbar>
        <div className="flex flex-wrap items-center text-14 text-gray-90">
          <span className="font-500 mr-10">{__('Admin')}</span>
          <div className="w-1 h-[49px] bg-gray-5"></div>
        </div>
        <Button
          className="is-primary"
          onClick={() => handleSave()}
          disabled={isBlocking === false}
        >
          {buttonText}
        </Button>
      </Toolbar>
    */
  }

  return (
    <div
      className="
        relative
        n:sticky
        n:top-0
        n:md:top-[32px]
        w-full
        h-[102px]
        flex
        justify-between
        border-b
        border-gray-5
        bg-white
        z-10"
    >
      {/*
      <div className="flex items-center h-[48px]">
        <span className="text-14 font-500 text-gray-90 mr-8">
          {__('Admin')}
        </span>
      </div>

      <div className="w-1 h-full bg-gray-5"></div>
      */}

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
            <AddRoleGroup />
          </div>

          <ButtonSave />
        </div>

        <div
          className="
            flex
            items-center
            justify-between
            h-[50px]
            pl-12
            pr-16
            text-13
            border-t
            border-gray-5"
        >
          <RoleGroupEdit />
        </div>
      </div>
    </div>
  );
};

export default Head;
