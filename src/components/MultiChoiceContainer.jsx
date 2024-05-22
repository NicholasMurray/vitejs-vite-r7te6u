import React, { useContext, useEffect } from 'react';
import { RadioContext } from './RadioContext';

export const MultiChoiceContainer = ({ children, defaultChecked }) => {
  const { selectedValue, setSelectedValue } =
    useContext(RadioContext);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    setSelectedValue(defaultChecked);
  }, [defaultChecked]);

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
