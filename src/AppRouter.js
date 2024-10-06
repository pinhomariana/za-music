import React from 'react';
import Search from 'pages/Home/Search';
import Layout from 'components/Layout';
import Error from 'pages/Error';
import Genre from 'pages/Genre';
import HomePage from 'pages/Home';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <div>
      <ErrorBoundary fallback={<Error isErrorPage={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genres/:genreId" element={<Genre />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default AppRouter;
