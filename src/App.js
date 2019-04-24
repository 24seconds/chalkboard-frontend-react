import React, { useContext } from 'react';
import Layout from './components/layout';
import Board from './components/board';

const ToggleContext = React.createContext(
  {
    isToggle: false,
    toggle: () => {},
  }
);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = () => {
      this.setState((state, props) => ({ toggle: !state.toggle }));
    }
    this.state = {
      isToggle: false,
      toggle: this.toggle,
    }
  }

  render() {
    return (
      <div className="App">
        <ToggleContext.Provider value={this.state}>
          <Layout>
            <Board />
          </Layout>
        </ToggleContext.Provider>
      </div>
    );
  }
}

export default App;
