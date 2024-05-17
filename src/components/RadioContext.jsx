import React, { createContext, useState } from 'react';

const RadioContext = createContext();

const RadioProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <RadioContext.Provider
      value={{ selectedValue, setSelectedValue }}
    >
      {children}
    </RadioContext.Provider>
  );
};

export { RadioContext, RadioProvider };
