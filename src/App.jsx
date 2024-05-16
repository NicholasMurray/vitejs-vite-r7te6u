import { useState } from 'react';
import { RadioProvider } from './components/RadioContext';
import RadioInputComponent from './components/RadioInputComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RadioProvider>
        <RadioInputComponent />
      </RadioProvider>
    </>
  );
}

export default App;
