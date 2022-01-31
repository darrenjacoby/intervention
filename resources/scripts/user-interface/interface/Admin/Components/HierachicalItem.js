import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
import { Row, RowIn } from './Row';
import { pathAtom, selectedIndexDataAtom } from '../../../atoms/admin';
import { getInterventionKey } from '../../../utils/admin';

/**
 * Is Hierachical
 *
 * @param {string} k
 * @returns {boolean}
 */
const isHierachical = (k) => {
  return k.includes(':hierachical');
  // return (k.match(/:hierachical/g) || []).length === 1;
};

/**
 * Hierachical Applied
 *
 * @param {object} props
 * @returns <HierachicalApplied>
 */
const HierachicalApplied = ({ count }) => {
  return (
    <>
      {count !== 0 && count !== null && (
        <div
          className="
            min-w-[48px]
            h-full
            flex
            items-center
            justify-center
            text-14
            text-primary-10
            leading-none
            border-l
            border-gray-2"
        >
          {count}
        </div>
      )}
    </>
  );
};

/*
min-w-[22px]
min-h-[22px]
flex
items-center
justify-center
leading-none
text-primary-10
border
border-primary
rounded-full
mr-16
*/

/**
 * Hierachical
 *
 * @param {object} { key: {string} key }
 * @returns <HierachicalItem />
 */
const Hierachical = ({ item: key }) => {
  const [, setPath] = useAtom(pathAtom);
  const [data] = useAtom(selectedIndexDataAtom);

  /**
   * Get Applied Count
   */
  const getAppliedCount = () => {
    const components = Object.keys(data.components);
    if (components.length) {
      const componentsForKey = components.filter((k) => {
        return k.startsWith(getInterventionKey(key));
      });
      return componentsForKey.length;
    }
  };

  /**
   * Handler
   */
  const handler = () => {
    setPath(key);
  };

  /**
   * Render
   */
  return (
    <Row isButton={true}>
      <Button onClick={() => handler()}>
        <RowIn isHierachical={true}>{getInterventionKey(key)}</RowIn>
        <HierachicalApplied count={getAppliedCount()} />
      </Button>
    </Row>
  );
};

export { isHierachical, Hierachical };
