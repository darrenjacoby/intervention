import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { __ } from '../../utils/wp';

/**
 * Button Copy
 *
 * @param {object} props
 */
const ButtonCopy = ({ textToCopy }) => {
  const [copied, setCopied] = useState(__('Copy'));

  useEffect(() => {
    const timer = setTimeout(() => setCopied(__('Copy')), 5000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <CopyToClipboard text={textToCopy} onCopy={() => setCopied(__('Copied'))}>
      <Button className="is-secondary">{copied}</Button>
    </CopyToClipboard>
  );
};

export default ButtonCopy;
