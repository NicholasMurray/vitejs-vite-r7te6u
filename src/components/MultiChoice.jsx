import React from 'react';
import { RadioProvider } from './RadioContext';
import { MultiChoiceContainer } from './MultiChoiceContainer';

export const MultiChoice = ({ children, defaultChecked }) => {

  return (
    <RadioProvider>
      <MultiChoiceContainer defaultChecked={defaultChecked}>{ children }</MultiChoiceContainer>
    </RadioProvider>
  );
};
