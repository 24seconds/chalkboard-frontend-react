import React from 'react';
import Context from './context';

import Layout from './components/layout';
import Content from './components/content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = () => {
      console.log("TT")
      this.setState(state => ({ isToggle: !state.isToggle }));
    }
    this.state = {
      isToggle: false,
      toggle: this.toggle,
    }
  }

  render() {
    return (
      <div className="App">
        <Context.Provider value={this.state}>
          <Layout>
            <Content />
          </Layout>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
