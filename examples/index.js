import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../components";
ReactDOM.render(
  <Button onClick={() => console.log("aa")}>测试</Button>,
  document.getElementById("root")
);
