/**
 * WordPress Container
 *
 * @param {object} props
 */
const WordPressContainer = ({ children }) => {
  return <div className="relative -ml-10 md:-ml-20">{children}</div>;
};

export default WordPressContainer;
