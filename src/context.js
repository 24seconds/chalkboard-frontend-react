import React from 'react';

const Context = React.createContext(
  {
    isToggle: false,
    toggle: () => {},
    gold: 0,
  }
);


export default Context;
