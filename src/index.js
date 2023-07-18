import React from "react";
import ReactDOM from "react-dom";
import { add, divide, multiply, subtract } from "./calculator.js";
import * as calc from "./calculator";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(50, 8)}</li>
    <li>{calc.divide(2, 3)}</li>
    <li>{calc.subtract(100, 50)}</li>

    <li>{subtract(7, 2)}</li>
    <li>{add(7, 2)}</li>
    <li>{multiply(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

//If importing all, you must create a funtion name and call it with the "."
