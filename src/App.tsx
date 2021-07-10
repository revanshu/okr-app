import React from 'react';
import './App.css';
import OKRComponent from './components/okr-component';
import ErrorBoundary from './components/error-boundary-component';

function App() {
  return (
    <>
     <ErrorBoundary>
        <OKRComponent />
     </ErrorBoundary>
    </>
  );
}

export default App;
