import { TextItem } from './TextItem';
import { __ } from '../../../utils/wp';

/**
 * Is Number Item
 *
 * @param {string} k
 * @returns {boolean}
 */
const isNumberItem = (k) => {
  return k.includes(':number');
};

/**
 * Number Item
 *
 * @param {object} { key: {string} key }
 * @returns <TextItem />
 */
const NumberItem = ({ item: key }) => <TextItem item={key} type="number" />;

export { isNumberItem, NumberItem };
