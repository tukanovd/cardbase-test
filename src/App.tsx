import React from 'react';
import { InitApp, Home, UrlSearch } from './containers';
import { ErrorBoundary } from './components';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <InitApp />
        <UrlSearch />
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
