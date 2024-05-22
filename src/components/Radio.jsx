import React from 'react';

export const Radio = ({ children, handleRadioChange, name, checked, value, defaultChecked }) => {
    return (
      <label className="radio">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleRadioChange}
        />
        { children } { defaultChecked && <span> - <b>default checked</b></span>}
      </label>
    );
};
