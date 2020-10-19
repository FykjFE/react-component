import React from "react";
import "./style/button.scss";

export const Button: React.FC = (props) => {
  return <button>{props.children}</button>;
};
