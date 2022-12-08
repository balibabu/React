import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function onclick() {
    setIsDone((prevState) => !prevState);
  }
  return (
    <li style={{ textDecoration: isDone && "line-through" }} onClick={onclick}>
      {props.item}
    </li>
  );
}

export default TodoItem;
