import React from 'react';

export const Radio = ({ children, handleRadioChange, name, checked, value }) => {
    return (
      <label className="radio">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleRadioChange}
        />
        { children }
      </label>
    );
};
