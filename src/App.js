import React from 'react';

// Pages
import Comparison from './pages/Comparison';

const App = ({ initialState }) => {
  const { slides } = initialState;

  return (
    <article className="container">
      <Comparison slides={slides} />
    </article>
  );
};

export default App;
