import React from 'react';
import { Radio } from './Radio';

export const RadioConditional = ({ children, handleRadioChange, label, name, checked, value }) => {
    return (
        <>
        <Radio
            name={name}
            value={value}
            checked={checked}
            handleRadioChange={handleRadioChange}
        >
            { label }
        </Radio>
        <div className={`${!checked ? 'conditional--hidden' : ''}`}>
            { children }
        </div>
      </>
    );
};
