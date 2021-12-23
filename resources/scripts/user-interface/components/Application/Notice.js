import { sprintf } from '@wordpress/i18n';
import Notice from '../Page/Notice';
import { __ } from '../../utils/wp';

/**
 * Import Notice
 *
 * @param {object} props
 */
const ImportNotice = ({ imported, diff, setRadio }) => {
  const match = __('Intervention—Database match') + '.';

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
          __('Imported %1$s and %2$s failed'),
          imported.completed.length,
          imported.skipped.length
        )}
        {'.'}
      </Notice>
    );
  }

  /**
   * Completed
   */
  if (imported.completed.length > 0) {
    return (
      <Notice highlight={true}>
        {sprintf(__('Imported %s'), imported.completed.length)}. {match}
      </Notice>
    );
  }

  /**
   * Diffs
   */
  if (diff > 0) {
    return (
      <Notice>
        <div className="flex items-center">
          {/*__('Found')}{' '*/}
          {/*
        <a href="#" onClick={handleDiffsLink}>
          {diff === 1
            ? sprintf(__('Found %s difference'), diff)
            : sprintf(__('Found %s differences'), diff)}
        </a>{' '}
          */}
          <span className="font-500 text-gray-90 mr-8">
            {__('Application')}
          </span>
          <div className="w-1 h-[48px] bg-gray-5 mt-1 mr-8"></div>
          <a className="pl-4" href="#" onClick={handleDiffsLink}>
            {sprintf(__('%s mismatch'), diff)}
          </a>
        </div>
      </Notice>
    );
  }

  /**
   * Matching
   */
  return <Notice>{match}</Notice>;
};

export default ImportNotice;
