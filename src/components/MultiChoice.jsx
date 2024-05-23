import React from 'react';
import { MultiChoiceProvider } from './MultiChoiceContext';
import { MultiChoiceContainer } from './MultiChoiceContainer';

export const MultiChoice = ({ children, defaultChecked }) => {

  return (
    <MultiChoiceProvider>
      <MultiChoiceContainer defaultChecked={defaultChecked}>{ children }</MultiChoiceContainer>
    </MultiChoiceProvider>
  );
};
