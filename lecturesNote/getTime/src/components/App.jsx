import React from "react";

function App() {
  const [time, updateState] = React.useState(new Date().toLocaleTimeString());
  function getTime() {
    updateState(new Date().toLocaleTimeString());
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
