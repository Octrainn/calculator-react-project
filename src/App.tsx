import "./styles.css";

function App() {
  return (
    <div className="calculator-flex">
      <div className="output">
        <div className="top-right-number">
          <div className="main-number"></div>
        </div>
      </div>
      <button className="two-spots">AC</button>
      <button>DEL</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>÷</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>*</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>+</button>
      <button className="one-spot">=</button>
    </div>
  );
}

export default App;
