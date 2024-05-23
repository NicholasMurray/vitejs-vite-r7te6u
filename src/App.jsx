import { MultiChoice } from './components/MultiChoice';
import { Radio } from './components/Radio';
import { RadioConditional } from './components/RadioConditional';
import './App.css';

function App() {
  return (
    <>
      <h3>
        MultiChoice Radio button conditional reveal input
      </h3>
        <MultiChoice defaultChecked="no">
          <Radio
            name="option"
            value="yes"
          >
            Yes
          </Radio>
          <Radio
            name="option"
            value="no"
          >
            No
          </Radio>
          <RadioConditional
            name="option"
            value="other"
            label="Other"
          >
            <label>
              <div>Additional Input</div>
              <input type="text" />
            </label>
          </RadioConditional>
          <Radio
            name="option"
            value="whatever"
          >
            Whatever
          </Radio>
          <RadioConditional
            name="option"
            value="something"
            label="Something"
            >
            <MultiChoice>
              <Radio
                name="option"
                value="yes"
              >
                Yes
              </Radio>
              <Radio
                name="option"
                value="no"
              >
                No
              </Radio>
            </MultiChoice>
          </RadioConditional>
        </MultiChoice>
    </>
  );
}

export default App;
