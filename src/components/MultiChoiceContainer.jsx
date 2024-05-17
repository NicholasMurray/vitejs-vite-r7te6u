import React, { useContext } from 'react';
import { RadioContext } from './RadioContext';

export const MultiChoiceContainer = ({ children }) => {
  const { selectedValue, setSelectedValue } =
    useContext(RadioContext);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        handleRadioChange: handleRadioChange,
        checked: (selectedValue === child.props.value)
      });
    });
  };
  
  return (
    <>
      <p>Selected value: {selectedValue}</p>
      { renderChildren() }
    </>
  );
};
