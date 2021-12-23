import Row from './Row';
import { isRowRemove, RowRemove } from './RowRemove';
import { isRowRemoveGroup, RowRemoveGroup } from './RowRemoveGroup';

const components = intervention.route.admin.data.components;

/**
 * Sanitize
 *
 * Remove `_` from the nested string.
 *
 * @param {string} str
 * @returns {string}
 */
const id = ':hierachical';

/*
const sanitize = (str) => {
  return str.endsWith(id) ? str.substring(0, str.length - id.length) : str;
};
*/

/**
 * Is Nested
 *
 * @param {*} key
 * @returns {boolean}
 */
const isRowHierachical = (key) => {
  return key.endsWith(id);
};

/**
 * Nested Link
 *
 * @param {object} param
 * @returns {<NestedLink />}
 */
const RowHierachical = ({ item: key }) => {
  const parentKey = key;

  const getSanitizedKey = () => {
    return key.replaceAll(id, '');
  };

  const getKeyComponents = () => {
    const keysArray = key.split('/');

    return keysArray.reduce((carry, componentsKey) => {
      const index = carry[componentsKey];
      carry = index;
      return carry;
    }, components);
  };

  const sanitizedParentKey = getSanitizedKey();
  const childComponents = getKeyComponents();

  return (
    <>
      <div
        className=""
        onClick={() => {
          console.log('RowGroupHandler');
        }}
      >
        <Row>{sanitizedParentKey}</Row>
      </div>

      <div className="ml-48 border-l-4 border-primary">
        {Object.keys(childComponents).map((key) => (
          <div key={key}>
            {isRowHierachical(key) && (
              <RowHierachical item={`${parentKey}/${key}`} />
            )}
            {isRowRemoveGroup(key) && (
              <RowRemoveGroup item={`${parentKey}/${key}`} />
            )}
            {isRowRemove(childComponents[key]) && (
              <RowRemove item={`${sanitizedParentKey}/${key}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export { RowHierachical, isRowHierachical };
