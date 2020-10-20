import React from 'react';
import './style/button.scss';

interface ButtonProps {
  /** 点击事件 */
  onClick?: (event: any) => void;
  /** 按钮类型 */
  type?: string;
  /** 按钮禁用 */
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={'fy-button'} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
