import React from "react";
import ReactDom from "react-dom";

let name="bali";

var today = new Date();
var options = {
  year: "numeric",
};
var year = today.toLocaleDateString("en-US", options);
ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>
  ,document.getElementById('root')
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
// new Date().getFullYear()