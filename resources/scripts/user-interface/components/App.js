import { HashRouter, Routes } from 'react-router-dom';
import WordPressContainer from './WordPressContainer';
import Head from './Head';
import Tools from './Tools';
import Export from './Tools/Export';
import Import from './Tools/Import';

/**
 * App
 */
const App = () => {
  return (
    <HashRouter>
      <WordPressContainer>
        <Head />
        <Routes>
          <Tools path="/">
            <Export path="/" />
            <Import path="tools/import" />
          </Tools>
        </Routes>
      </WordPressContainer>
    </HashRouter>
  );
};

export default App;
