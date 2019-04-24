import React from 'react';
import Layout from './components/layout';
import Board from './components/board';
function App() {
  return (
    <div className="App">
      <Layout>
        <Board />
      </Layout>
    </div>
  );
}

export default App;
