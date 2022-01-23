import { sprintf } from '@wordpress/i18n';
import { __ } from '../../utils/wp';

/**
 * Toolbar Content Render
 *
 * @description application messaging for toolbar content.
 *
 * @param {object} props
 * @returns <ToolbarContentRender />
 */
const ToolbarContentImported = ({ imported, diff, setRadio }) => {
  /**
   * Imported with fails
   */
  if (imported.skipped.length > 0) {
    return (
      <>
        {sprintf(
          __('Imported %1$s and %2$s failed'),
          imported.completed.length,
          imported.skipped.length
        )}
        {'.'}
      </>
    );
  }

  /**
   * Imported
   */
  if (imported.completed.length > 0) {
    return <>{sprintf(__('Imported %s'), imported.completed.length)}.</>;
  }

  /**
   * Matching
   */
  return <></>;
};

export { ToolbarContentImported };
