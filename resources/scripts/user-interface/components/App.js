import React from "react";
import { HashRouter, Routes } from "react-router-dom";
import WordPressContainer from "./Page/WordPressContainer";
import Head from "./Head";
import Admin from "./Admin";
import Export from "./Export";
import Application from "./Application";

/**
 * App
 */
const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <WordPressContainer>
          <Head />
          <Routes>
            <Admin path="/" exact />
            <Application path="/application" />
            <Export path="/export" />
          </Routes>
        </WordPressContainer>
      </HashRouter>
    </React.StrictMode>
  );
};

export default App;
