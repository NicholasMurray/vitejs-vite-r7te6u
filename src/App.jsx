import { useState } from 'react';
import { RadioProvider } from './components/RadioContext';
import RadioInputComponent from './components/RadioInputComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Radio button conditional reveal
      </p>
      <RadioProvider>
        <RadioInputComponent />
      </RadioProvider>
    </>
  );
}

export default App;
