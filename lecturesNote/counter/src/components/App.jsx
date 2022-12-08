import React from "react";

function App() {
  const [count, setStateFunction] = React.useState(0);
  function increase() {
    setStateFunction(count + 1);
  }
  function decrease() {
    setStateFunction(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
