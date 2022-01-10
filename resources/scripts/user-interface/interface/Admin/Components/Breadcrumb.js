import React from 'react';
import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
import { pathAtom, selectedIndexPathAtom } from '../../../atoms/admin';
import { getInterventionKey } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Breadcrumb
 *
 * @returns <Breadcrumb />
 */
const Breadcrumb = () => {
  const [, setPath] = useAtom(pathAtom);
  const [path] = useAtom(selectedIndexPathAtom);
  const paths = path.split('/');

  /**
   * Is Path
   *
   * @returns {boolean}
   */
  const isPath = () => paths[0] !== '';

  /**
   * Handler
   *
   * @param {string} k
   */
  const handler = (k) => {
    const pos = path.indexOf(k) + k.length;
    setPath(path.substring(0, pos));
  };

  /**
   * Render
   */
  return (
    <div className="flex items-center ? h-[50px]">
      <Button
        className="cursor-pointer flex items-center px-10 h-[50px] ?"
        onClick={() => handler('')}
      >
        {__('admin')}
      </Button>

      {isPath() &&
        paths.map((item) => (
          <Button
            key={item}
            className="cursor-pointer flex items-center px-10 h-[50px] ?"
            onClick={() => handler(item)}
          >
            {getInterventionKey(item)}
          </Button>
        ))}
    </div>
  );
};

export { Breadcrumb };
