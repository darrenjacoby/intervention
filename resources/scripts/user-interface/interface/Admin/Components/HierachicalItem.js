import { useAtom } from 'jotai';
import { pathAtom } from '../../../atoms/admin';
import { Button, Icon } from '@wordpress/components';
import { Row } from './Row';
import { getInterventionKey } from '../../../utils/admin';

/**
 * Is Hierachical
 *
 * @param {string} k
 * @returns {boolean}
 */
const isHierachical = (k) => {
  return k.includes(':hierachical');
  // console.log(k.match(/:hierachical/g));
  // console.log((k.match(/:hierachical/g) || []).length);
  // return (k.match(/:hierachical/g) || []).length === 1;
};

/**
 * Hierachical
 *
 * @param {object} { key: {string} key }
 * @returns <HierachicalItem />
 */
const Hierachical = ({ item: key }) => {
  const [, setPath] = useAtom(pathAtom);

  /**
   * Handler
   */
  const handler = (event) => {
    event.preventDefault();
    // history.pushState(null, null, `#${key}`);
    setPath(key);
  };

  /**
   * Render
   */
  return (
    <a
      className="
        flex-1
        text-13
        lg:text-14
        leading-none
        text-gray-50
        border-gray-2
        border-b
        h-[44px]
        truncate
        cursor-pointer
        flex
        items-center"
      href="#"
      onClick={(event) => handler(event)}
    >
      {getInterventionKey(key)}
      <Icon
        className="
            ml-4
            flex
            items-center
            justify-center
            text-primary-10
            text-16
            p-0
            border-2
          "
        icon="arrow-right-alt"
      />
    </a>
  );
};

export { isHierachical, Hierachical };
