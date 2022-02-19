import { useAtom } from 'jotai';
import { isHierachical } from './Components/HierachicalItem';
import { isBooleanItem, BooleanItem } from './Components/BooleanItem';
import { isBooleanGroup } from './Components/BooleanGroup';
import { isTextItem, TextItem } from './Components/TextItem';
import { isNumberItem, NumberItem } from './Components/NumberItem';
import { isIconItem, IconItem } from './Components/IconItem';
import { isRouteItem, RouteItem } from './Components/RouteItem';
import { selectedIndexDataAtom } from '../../atoms/admin';
import { getInterventionKey } from '../../utils/admin';
import { objectHasKey } from '../../utils/structures';
import { __ } from '../../utils/wp';

const staticComponentsData = intervention.route.admin.data.components;

/**
 * Get Static Components Data
 *
 * @param {string} path
 * @returns {object} { {key} key: {boolean|object} value  }
 */
const getStaticComponentsData = (path = '') => {
  const get = () => {
    const paths = path.split('/');
    return paths.reduce((carry, item) => {
      carry = objectHasKey(carry, item) ? carry[item] : carry;
      return carry;
    }, staticComponentsData);
  };

  return path !== '' ? get() : staticComponentsData;
};

/**
 * Is Item On
 *
 * @param {string} key
 * @returns {boolean}
 */
const isItemOn = (key) => {
  const [data] = useAtom(selectedIndexDataAtom);
  return Object.keys(data.components).includes(getInterventionKey(key));
};

/**
 * Is Applied Not Found
 *
 * @param {string} key
 * @returns {boolean}
 */
const isAppliedNotFound = () => {
  const [data] = useAtom(selectedIndexDataAtom);
  return Object.keys(data.components).length === 0;
};

/**
 * Is Hierachical Title
 *
 * @param {string} key
 * @returns
 */
const isHierachicalTitle = (interventionKey) => {
  const [data] = useAtom(selectedIndexDataAtom);
  const appliedKeys = Object.keys(data.components).some((k) =>
    k.startsWith(interventionKey)
  );
  const top = interventionKey.split('.').length === 1;
  return top && appliedKeys;
};

const AppliedNotFound = ({ children }) => {
  return (
    <h2
      className="
        text-16
        m-0
        h-[50px]
        flex
        items-center
        px-16
        text-gray-50
        font-400
        border-t
        border-gray-2"
    >
      {children}
    </h2>
  );
};

/**
 * Components Applied
 *
 * @returns <ComponentsApplied />
 */
const ComponentsApplied = () => {
  /**
   * Get First Path Key
   *
   * @description required to determine `:route` items.
   */
  // const getFirstPathKey = Object.keys(getStaticComponentsData(''))[0];

  /**
   *
   * @param {object} props
   * @returns
   */
  const RoutingHierachical = ({ item }) => {
    const interventionKey = getInterventionKey(item);

    return (
      <>
        {isHierachicalTitle(interventionKey) && (
          <h2
            className="
              text-16
              m-0
              h-[50px]
              flex
              items-center
              px-16
              text-gray-50
              font-400
              border-t
              border-gray-2"
          >
            {interventionKey}
          </h2>
        )}
        {Object.keys(getStaticComponentsData(item)).map((key) => (
          <Routing key={key} item={key} path={item} />
        ))}
      </>
    );
  };

  /**
   *
   * @param {*} param0
   * @returns
   */
  const RoutingBooleanGroup = ({ item: groupKey }) => {
    const childKeys = getStaticComponentsData(groupKey);
    return (
      <>
        {Object.keys(childKeys).map((key) => (
          <Routing key={key} item={key} path={groupKey} />
        ))}
      </>
    );
  };

  /**
   * Routing
   *
   * @param {object} item
   * @returns <Routing />
   */
  const Routing = ({ item: k, path = '' }) => {
    const key = path !== '' ? `${path}/${k}` : k;

    /**
     * Render
     *
     * @description hierachical items are routed to `<RoutingHierachical />`
     */
    return (
      <>
        {isHierachical(k) && <RoutingHierachical item={key} />}
        {isItemOn(key) && (
          <>
            {isBooleanItem(k) && <BooleanItem item={key} />}
            {isTextItem(k) && <TextItem item={key} />}
            {isNumberItem(k) && <NumberItem item={key} />}
            {isIconItem(k) && <IconItem item={key} />}
            {isBooleanGroup(k) && <BooleanItem item={key} />}
            {isRouteItem(k) && <RouteItem item={key} />}
          </>
        )}
        {isBooleanGroup(k) && !isItemOn(key) && (
          <RoutingBooleanGroup item={key} />
        )}
        {/*
        {isBooleanGroup(k) && (isItemOn(key) || isBooleanGroupOn(key)) && (
          <BooleanGroup item={key} data={getStaticComponentsData(key)} />
        )}
        */}
      </>
    );
  };

  /**
   * Render
   */
  return (
    <div className="border-gray-2 border-b mt-[-1px] mb-[-1px]">
      {isAppliedNotFound() && (
        <AppliedNotFound>{__('Nothing found')}.</AppliedNotFound>
      )}
      {Object.keys(getStaticComponentsData()).map((key) => (
        <Routing key={key} item={key} />
      ))}
    </div>
  );
};

export { ComponentsApplied };
