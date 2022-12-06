import React from "react";
import ReactDOM from "react-dom";
import PIE,{doublePi,triplePi} from "./math";       // default export can have different names but not other exports

ReactDOM.render(
  <ul>
    <li>{PIE}</li>
    <li>{doublePi()}</li>   
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
// we have used doublePi() as it is function but PIE is not