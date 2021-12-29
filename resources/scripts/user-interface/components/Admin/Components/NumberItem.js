import { useState, useEffect, useContext } from '@wordpress/element';
import { TextControl, Button } from '@wordpress/components';
import { TextItem } from './TextItem';
import { Row, RowState } from './Row';
import { getInterventionKey } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

const isNumberItem = (k) => {
  return k.includes(':number');
};

/**
 * Number Item
 *
 * @param {object} { key: {string} key }
 * @returns <TextItem />
 */
const NumberItem = ({ item: key }) => {
  return <TextItem item={key} type="number" />;
};

export { isNumberItem, NumberItem };
