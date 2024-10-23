import React, { useState } from 'react';
import './Calculator.css'; // Make sure your CSS file path is correct

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operations, setOperations] = useState('');
  const [current, setCurrent] = useState('0');

  const handleClick = (value) => {
    if (value >= '0' && value <= '9' || value === '.') {
      if (operations === '') {
        setNum1((prev) => prev + value);
        setCurrent((prev) => prev === '0' ? value : prev + value);
      } else {
        setNum2((prev) => prev + value);
        setCurrent((prev) => prev + value);
      }
    }

    if (['+', '-', '*', '/'].includes(value)) {
      setOperations(value);
      setCurrent((prev) => prev + value);
    }

    if (value === '=') {
      calculate();
    }

    if (value === 'C') {
      clear();
    }

    if (value === '⬅') {
      backspace();
    }
  };

  const calculate = () => {
    let result;
    switch (operations) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }
    setCurrent(result.toString());
    setNum1(result.toString());
    setNum2('');
    setOperations('');
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setOperations('');
    setCurrent('0');
  };

  const backspace = () => {
    if (operations === '') {
      setNum1((prev) => prev.slice(0, -1));
      setCurrent((prev) => prev.slice(0, -1) || '0');
    } else {
      setNum2((prev) => prev.slice(0, -1));
      setCurrent((prev) => prev.slice(0, -1) || '0');
    }
  };

  return (
    <div className="container-calculator" style={{ boxShadow: '0 0 1rem grey'}}>
      <section className="screen">
        <div className="result">{current}</div>
      </section>
      <section className="buttons">
        <button className="calc clear" onClick={() => handleClick('C')}>C</button>
        <button className="calc delete" onClick={() => handleClick('⬅')}>⬅</button>
        <button className="calc operations" onClick={() => handleClick('/')}>/</button>

        <button className="calc numbers" onClick={() => handleClick('7')}>7</button>
        <button className="calc numbers" onClick={() => handleClick('8')}>8</button>
        <button className="calc numbers" onClick={() => handleClick('9')}>9</button>
        <button className="calc operations" onClick={() => handleClick('*')}>*</button>

        <button className="calc numbers" onClick={() => handleClick('4')}>4</button>
        <button className="calc numbers" onClick={() => handleClick('5')}>5</button>
        <button className="calc numbers" onClick={() => handleClick('6')}>6</button>
        <button className="calc operations" onClick={() => handleClick('-')}>-</button>

        <button className="calc numbers" onClick={() => handleClick('1')}>1</button>
        <button className="calc numbers" onClick={() => handleClick('2')}>2</button>
        <button className="calc numbers" onClick={() => handleClick('3')}>3</button>
        <button className="calc operations" onClick={() => handleClick('+')}>+</button>

        <button className="calc numbers" onClick={() => handleClick('.')}>.</button>
        <button className="calc numbers" onClick={() => handleClick('0')}>0</button>
        <button className="calc equals" onClick={() => handleClick('=')}>=</button>
      </section>
    </div>
  );
};

export default Calculator;
