import { useAtom } from 'jotai';
import { pathAtom } from '../../AdminAtoms';
import { Icon } from '@wordpress/components';
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
};

/**
 * Hierachical
 *
 * @param {object} { key: {string} key }
 * @returns <HierachicalItem />
 */
const Hierachical = ({ item: key }) => {
  const [, setPath] = useAtom(pathAtom);

  return (
    <div onClick={() => setPath(key)}>
      <Row>
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
      </Row>
    </div>
  );
};

export { isHierachical, Hierachical };
