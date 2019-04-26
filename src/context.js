import React from 'react';

const Context = React.createContext(
  {
    isToggle: false,
    toggle: () => {},
    gold: 0,
    isEdit: false,
    setAdd: () => {},
  }
);


export default Context;
