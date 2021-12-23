import Row from './Row';
import Remove from './Remove';
import { isRowRemove, RowRemove } from './RowRemove';

const components = intervention.route.admin.data.components;

/**
 * Nested Link
 *
 * @param {object} param
 * @returns {<NestedLink />}
 */
const RowRemoveGroup = ({ item: key }) => {
  const parentKey = key;

  const getKeyComponents = () => {
    const keysArray = key.split('/');

    return keysArray.reduce((carry, componentsKey) => {
      const index = carry[componentsKey];
      carry = index;
      return carry;
    }, components);
  };

  // const sanitizedParentKey = getSanitizedKey();
  const childComponents = getKeyComponents();

  // console.log('RowRemoveGroup:');
  // console.log(childComponents);

  return (
    <>
      <div
        className="flex"
        onClick={() => {
          console.log('RowRemoveGroupHandler');
        }}
      >
        <div className="w-1/2">
          <Row>
            <Remove item={key} />
          </Row>
        </div>

        <div className="w-1/2 flex flex-wrap">
          {Object.keys(childComponents).map((key) => (
            <div key={key}>
              {isRowRemove(childComponents[key]) && (
                <RowRemove item={`${parentKey}/${key}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { RowRemoveGroup };
