import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState("");
  const [array, addItem] = useState([]);
  function onChangeHandler(event) {
    const value = event.target.value;
    setItem(value);
  }
  function addBtn() {
    addItem((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onChangeHandler} value={item} />
        <button onClick={addBtn}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((note) => (
            <TodoItem key={note} item={note} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
