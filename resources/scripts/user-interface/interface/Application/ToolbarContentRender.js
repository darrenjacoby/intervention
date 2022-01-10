import { sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { __ } from '../../utils/wp';

/**
 * Toolbar Content Render
 *
 * @description application messaging for toolbar content.
 *
 * @param {object} props
 * @returns <ToolbarContentRender />
 */
const ToolbarContentRender = ({ imported, diff, setRadio }) => {
  /**
   * Render: Imported with fails
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
   * Render: Imported
   */
  if (imported.completed.length > 0) {
    return <>{sprintf(__('Imported %s'), imported.completed.length)}.</>;
  }

  /**
   * Render: Diffs
   */
  if (diff > 0) {
    return (
      <>
        <Button className="blank" onClick={() => setRadio('mismatch')}>
          {sprintf(__('%s mismatch'), diff)}
        </Button>
      </>
    );
  }

  /**
   * Render: Matching
   */
  return <></>;
};

export { ToolbarContentRender };
