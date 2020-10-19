import React from "react";
import "./style/select.scss";

interface ButtonProps {
  onClick?: () => void;
}

export const Select: React.FC<ButtonProps> = (props) => {
  return <input type="text" />;
};
