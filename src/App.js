import React from 'react';
import Context from './context';

import Layout from './components/layout';
import Content from './components/content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = () => {
      this.setState(state => ({ isToggle: !state.isToggle }));
    }
    this.mining = () => {
      this.setState(state => ({ gold: state.gold + 1 }));
    }
    this.setAdd = () => {
      this.setState(state => ({ isEdit: !state.isEdit }));
    }
    this.state = {
      isToggle: false,
      toggle: this.toggle,
      gold: 0,
      mining: this.mining,
      setAdd: this.setAdd,
    };
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
