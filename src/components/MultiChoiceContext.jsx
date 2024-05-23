import React, { createContext, useState } from 'react';

const MultiChoiceContext = createContext();

const MultiChoiceProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <MultiChoiceContext.Provider
      value={{ selectedValue, setSelectedValue }}
    >
      {children}
    </MultiChoiceContext.Provider>
  );
};

export { MultiChoiceContext, MultiChoiceProvider };
