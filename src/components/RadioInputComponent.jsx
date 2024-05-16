import React, { useContext } from 'react';
import { RadioContext } from './RadioContext';

const RadioInputComponent = () => {
  const { selectedValue, setSelectedValue, inputRef } =
    useContext(RadioContext);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === 'yes') {
      inputRef.current.style.display = 'block';
    } else {
      inputRef.current.style.display = 'none';
    }
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="yes"
            checked={selectedValue === 'yes'}
            onChange={handleRadioChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="no"
            checked={selectedValue === 'no'}
            onChange={handleRadioChange}
          />
          No
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="other"
            checked={selectedValue === 'other'}
            onChange={handleRadioChange}
          />
          Other
        </label>
      </div>
      <div
        ref={inputRef}
        style={{ display: selectedValue === 'yes' ? 'block' : 'none' }}
      >
        <label>
          Additional Input:
          <input type="text" />
        </label>
      </div>
    </div>
  );
};

export default RadioInputComponent;
