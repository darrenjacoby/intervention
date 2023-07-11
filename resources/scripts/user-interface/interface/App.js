import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from '@wordpress/element';
import { Head } from './Head';
import { Export, queryFn as exportQueryFn } from './Export';
import { Import, queryFn as importQueryFn } from './Import';
import { Loader } from './Page/Loader';

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
		await queryClient.prefetchQuery('import', importQueryFn);
		await queryClient.prefetchQuery('export', exportQueryFn);
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
								<Route path="/" exact element={<Import />} />
								<Route path="/export" element={<Export />} />
							</Routes>
						</Suspense>
					</WordPressContainer>
				</QueryClientProvider>
			</HashRouter>
		</React.StrictMode>
	);
};

export { App };
