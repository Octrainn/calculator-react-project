import { useReducer } from "react";
import "./styles.css";

/*
This is what the calculator can do
*/
const ACTION = {
  Digit: "add-digit",
  operation: "choose-operation",
  Clear: "clear",
  Delete: "remove",
  Total: "equals",
};

type CalculatorState = {
  mainNumber: number;
  topRightNumber: number;
};

type DigitAction = { type: typeof ACTION.Digit; payload: { digit: number } };

function reducer(state: CalculatorState, action: DigitAction) {
  switch (action.type) {
    case ACTION.Digit:
      return {
        ...state,
        mainNumber: `${state.mainNumber}${action.payload.digit}`,
      };

    default:
      return state;
  }
}

/*
Using useReducer, same thing as a useState except it is more useful 
for multiple different types of actions and conditions, since we will be 
managing the state type of what was clicked in the calculato, for example
* = multiply, divide, add, etc, then the actual number that was clicked

*/

function App() {
  const [{ mainNumber, topRightNumber, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-flex">
      <div className="output">
        <div className="top-right-number">
          {topRightNumber}
          {operation}
        </div>
        <div className="main-number">{mainNumber}</div>
      </div>
      <button className="two-spots">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>0</button>
      <button className="one-spot">=</button>
    </div>
  );
}

export default App;
