import { sprintf } from '@wordpress/i18n';
import Notice from './Notice';
import { __ } from '../../utils/wp';

/**
 * Import Notice
 *
 * @param {object} props
 */
const ImportNotice = ({ imported, diff, setRadio }) => {
  const match = __('Intervention and the database match.');

  /**
   * Handle Diffs Link
   *
   * @param {object} event
   */
  const handleDiffsLink = (event) => {
    event.preventDefault();
    setRadio('mismatch');
  };

  /**
   * Skipped
   */
  if (imported.skipped.length > 0) {
    return (
      <Notice>
        {sprintf(
          __('Imported %1$s and %2$s failed.'),
          imported.completed.length,
          imported.skipped.length
        )}
      </Notice>
    );
  }

  /**
   * Completed
   */
  if (imported.completed.length > 0) {
    return (
      <Notice highlight={true}>
        {sprintf(__('Imported %1$s.'), imported.completed.length)} {match}
      </Notice>
    );
  }

  /**
   * Diffs
   */
  if (diff > 0) {
    return (
      <Notice>
        {/*__('Found')}{' '*/}
        {/*
        <a href="#" onClick={handleDiffsLink}>
          {diff === 1
            ? sprintf(__('Found %s difference'), diff)
            : sprintf(__('Found %s differences'), diff)}
        </a>{' '}
          */}
        {sprintf(
          __('Found %s differences between Intervention and the database'),
          diff
        )}
        .
        <a className="pl-4" href="#" onClick={handleDiffsLink}>
          {__('Show')}
        </a>
      </Notice>
    );
  }

  /**
   * Matching
   */
  return <Notice>{match}</Notice>;
};

export default ImportNotice;
