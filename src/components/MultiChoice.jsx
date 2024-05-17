import React from 'react';
import { RadioProvider } from './RadioContext';
import { MultiChoiceContainer } from './MultiChoiceContainer';

export const MultiChoice = ({ children }) => {

  return (
    <RadioProvider>
      <MultiChoiceContainer>{ children }</MultiChoiceContainer>
    </RadioProvider>
  );
};
