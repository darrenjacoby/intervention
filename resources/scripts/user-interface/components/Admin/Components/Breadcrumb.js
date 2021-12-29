import React from 'react';
import { useAtom } from 'jotai';
import { pathAtom } from '../../AdminAtoms';
import { getInterventionKey } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Breadcrumb
 *
 * @returns <Breadcrumb />
 */
const Breadcrumb = () => {
  const [path, setPath] = useAtom(pathAtom);
  const paths = path.split('/');

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
    <div className="flex">
      <div className="cursor-pointer" onClick={() => handler('')}>
        {__('root')}
      </div>

      {paths.map((item) => (
        <div
          key={item}
          className="cursor-pointer"
          onClick={() => handler(item)}
        >
          {getInterventionKey(item)}
        </div>
      ))}
    </div>
  );
};

export { Breadcrumb };
