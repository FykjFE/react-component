import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../components";
import("react-component").then((res) => {
  console.log(res);
});
ReactDOM.render(
  <Button onClick={() => console.log("aa")}>测试</Button>,
  document.getElementById("root")
);
