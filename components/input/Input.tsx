import React from "react";
import "./style/select.scss";

interface InputProps {
  src: string;
}

export const Input: React.FC<InputProps> = ({src}) => {
  return <input src={src}/>;
};
