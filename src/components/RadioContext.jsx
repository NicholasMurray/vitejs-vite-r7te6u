import React, { createContext, useState, useContext, useRef } from 'react';

const RadioContext = createContext();

const RadioProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const inputRef = useRef(null);

  return (
    <RadioContext.Provider
      value={{ selectedValue, setSelectedValue, inputRef }}
    >
      {children}
    </RadioContext.Provider>
  );
};

export { RadioContext, RadioProvider };
