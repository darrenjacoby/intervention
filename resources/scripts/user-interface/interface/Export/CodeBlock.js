import { useEffect, useState } from '@wordpress/element';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import { PseudoFade } from '../Page/PseudoFade';

/**
 * Code Block
 *
 * @description code block for export page.
 *
 * @param {object} props
 * @returns <CodeBlock />
 */
const CodeBlock = ({ children }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  /**
   * Effects
   */
  useEffect(() => {
    Prism.highlightAll();
    // hack to stop prism highlight jitter
    setTimeout(() => setIsHighlighted(true), 15);
  });

  /**
   * Render
   */
  return (
    <div
      className={`
        relative
        py-20
        px-16
        ${isHighlighted ? '' : 'opacity-0'}
      `}
    >
      <pre>
        <code className="language-php text-14">{children}</code>
      </pre>

      <PseudoFade />
    </div>
  );
};

export { CodeBlock };
