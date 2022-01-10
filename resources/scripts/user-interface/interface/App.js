import React from 'react';
import { HashRouter, Routes } from 'react-router-dom';
import { Suspense } from '@wordpress/element';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Head } from './Head';
import { Admin } from './Admin';
import { Export } from './Export';
import { Application } from './Application';
import { Loader } from './Page/Loader';
import { adminQuery, applicationQuery, exportQuery } from '../queries';

/**
 * Query
 *
 * @description create query client for `react-query`.
 *
 * @link https://react-query.tanstack.com/reference/QueryClient
 */
const queryClient = new QueryClient();

/**
 * WordPress Container
 *
 * @description container to normalize WordPress styling.
 *
 * @param {object} props
 * @returns <WordPressContainer />
 */
const WordPressContainer = ({ children }) => {
  return <div className="relative -ml-10 md:-ml-20">{children}</div>;
};

/**
 * App
 *
 * @description providers, suspension and routing for Intervention user interface.
 *
 * @returns <App />
 */
const App = () => {
  /**
   * Prefetch
   *
   * @description prefetch queries for WordPress data.
   */
  const prefetch = async () => {
    await queryClient.prefetchQuery('admin', adminQuery);
    await queryClient.prefetchQuery('application', applicationQuery);
    await queryClient.prefetchQuery('export', exportQuery);
  };
  prefetch();

  /**
   * Render
   */
  return (
    <React.StrictMode>
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <WordPressContainer>
            <Head />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Admin path="/" exact />
                <Application path="/application" />
                <Export path="/export" />
              </Routes>
            </Suspense>
          </WordPressContainer>
        </QueryClientProvider>
      </HashRouter>
    </React.StrictMode>
  );
};

export { App };
