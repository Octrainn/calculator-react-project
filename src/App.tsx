import { useState } from "react";
import "./styles.css";

function App() {
  const [mainNumber, setMainNumber] = useState<number>(0); //main value is set to 0,
  const [topRightNumber, setTopRightNumber] = useState<number>(0); //defining second with state and an inital value of  0,
  const [operation, setOperation] = useState<string>(""); //operator when clicked which is an empty string

  //Basically setting up the state variable and all of the intial values to 0, as for the operator, we are setting it up as an empty string to later parse

  const handleNumberClick = (value: number) => {
    //function to handle when number is clicked, then setMainNumber gets updated by linking the clicked value with  the current number
    setMainNumber((prev) => prev * 10 + value);
  };

  const handleOperationClick = (op: string) => {
    //a function that is used to handle when the operator is clicked

    if (operation && operation === op) {
      return;
    } //When its clicked in succession, basically is made so that it returns nothing,
    if (operation) {
      handleEqualClick(); //if a prev operation is already being performed, exceute the equal button logic to perform the previous operation
    }
    setTopRightNumber(mainNumber); //sets topRight number  to main value,(number)
    setMainNumber(0); //resets main number to 0, so the second number can be inputted
    setOperation(op); //new operation performed
  };

  const handleEqualClick = () => {
    let result = 0;
    switch (
      operation //main logic of the calculator, depending on whichever operator was clicked the following would happen
    ) {
      case "+":
        result = topRightNumber + mainNumber;
        break;
      case "-":
        result = topRightNumber - mainNumber;
        break;
      case "*":
        result = topRightNumber * mainNumber;
        break;
      case "÷":
        result = topRightNumber / mainNumber;
        break;
      default:
        break;
    }
    setTopRightNumber(0);
    setMainNumber(result);
    setOperation("");
  };

  return (
    <div className="calculator-flex">
      <div className="output">
        <div className="top-right-number">
          {topRightNumber}
          {operation}
        </div>
        <div className="main-number">{mainNumber}</div>
      </div>
      <button
        className="two-spots"
        onClick={() => {
          setMainNumber(0);
          setTopRightNumber(0);
          setOperation("");
        }}
      >
        AC
      </button>
      <button
        onClick={() => {
          setMainNumber(Math.floor(mainNumber / 10));
        }}
      >
        DEL
      </button>
      <button onClick={() => handleOperationClick("÷")}>÷</button>
      <button onClick={() => handleNumberClick(1)}>1</button>
      <button onClick={() => handleNumberClick(2)}>2</button>
      <button onClick={() => handleNumberClick(3)}>3</button>
      <button onClick={() => handleOperationClick("*")}>*</button>
      <button onClick={() => handleNumberClick(4)}>4</button>
      <button onClick={() => handleNumberClick(5)}>5</button>
      <button onClick={() => handleNumberClick(6)}>6</button>
      <button onClick={() => handleOperationClick("+")}>+</button>
      <button onClick={() => handleNumberClick(7)}>7</button>
      <button onClick={() => handleNumberClick(8)}>8</button>
      <button onClick={() => handleNumberClick(9)}>9</button>
      <button onClick={() => handleOperationClick("-")}>-</button>
      <button onClick={() => handleNumberClick(0)}>0</button>
      <button className="one-spot" onClick={handleEqualClick}>
        =
      </button>
    </div>
  );
}

export default App;
