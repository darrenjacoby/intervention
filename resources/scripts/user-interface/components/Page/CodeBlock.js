import { useEffect } from '@wordpress/element';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import PseudoFade from './PseudoFade';

/**
 * Code Block
 *
 * @param {object} props
 */
const CodeBlock = ({ loading, children }) => {
  useEffect(() => Prism.highlightAll());

  return (
    <div
      className={`
        py-20
        px-16
        transition-opacity
        ${loading ? 'opacity-75' : ''}
      `}
    >
      <pre>
        <code className="language-php text-13 md:text-14">{children}</code>
      </pre>
      <PseudoFade />
    </div>
  );
};

export default CodeBlock;
