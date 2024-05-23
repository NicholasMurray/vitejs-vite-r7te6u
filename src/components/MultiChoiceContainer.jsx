import React, { useContext, useEffect } from 'react';
import { MultiChoiceContext } from './MultiChoiceContext';

export const MultiChoiceContainer = ({ children, defaultChecked }) => {
  const { selectedValue, setSelectedValue } =
    useContext(MultiChoiceContext);

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
