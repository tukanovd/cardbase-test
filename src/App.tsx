import React from 'react';
import { InitApp, Home } from './containers';
import { ErrorBoundary } from './components';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <InitApp />
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
