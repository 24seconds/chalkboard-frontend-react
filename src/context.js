import React from 'react';

const Context = React.createContext(
  {
    isToggle: false,
    toggle: () => {},
  }
);


export default Context;
