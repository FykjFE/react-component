import React from "react";
import "./style/button.scss";

interface ButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
