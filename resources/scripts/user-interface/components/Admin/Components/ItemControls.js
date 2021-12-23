import React from 'react';
import { useContext } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import AdminContext from '../../AdminContext';
import { __ } from '../../../utils/wp';

const ItemControls = ({ item }) => {
  /**
   * Remove
   *
   * @param {string} key
   */
  /*
  const remove = (key) => {
    let obj = applied;
    delete obj[key];
    setApplied({ ...obj });
    setIsBlocking(true);
  };
  */

  const { remove } = useContext(AdminContext);

  return (
    <Icon
      className="
        ml-4
        inline-flex
        items-center
        justify-center
        bg-primary
        text-white
        rounded-full
        text-14
        p-0
        w-16
        h-16
        cursor-pointer"
      onClick={() => {
        remove(item);
      }}
      icon="minus"
    />
  );
};

export default ItemControls;
