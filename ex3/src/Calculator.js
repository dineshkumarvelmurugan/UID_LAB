import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput} className="button special">C</button>
        <button onClick={() => setInput(input.slice(0, -1))} className="button special">CE</button>
        <button onClick={() => handleClick('%')} className="button special">%</button>
        <button onClick={() => handleClick('+')} className="button special">+</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className="button special">x</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className="button special">-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className="button special">+</button>
        <button onClick={() => handleClick('0')} className="button zero">0</button>
        <button onClick={() => handleClick('.')} className="button special">.</button>
        <button onClick={calculateResult} className="button special equals">=</button>
      </div>
    </div>
  );
};

export default Calculator;
