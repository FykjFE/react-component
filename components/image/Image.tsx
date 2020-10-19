import React from "react";
import "./style/image.scss";

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = ({src}) => {
  return <img src={src}/>;
};
