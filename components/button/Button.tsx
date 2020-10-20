import React from 'react';
import './style/button.scss';
import classNames from 'classnames';

interface ButtonProps {
  /** 点击事件 */
  onClick?: (event: any) => void;
  /** 按钮类型 */
  type?: string;
  /** 按钮禁用 */
  disabled?: boolean;
  /** 按钮尺寸 */
  size: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  function getSize(size: string): string {
    switch (size) {
      case 'large':
        return 'lg';
      case 'small':
        return 'sm';
      default:
        return 'md';
    }
  }
  return (
    <button
      className={classNames('fy-btn', {
        [`fy-btn-${getSize(props.size)}`]: true,
      })}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
