import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../components/button/Button";
import("../lib/index").then((res) => {
  console.log(res);
});
ReactDOM.render(<Button>测试</Button>, document.getElementById("root"));
