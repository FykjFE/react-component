import React from 'react';
import './style/button.scss';
import classNames from 'classnames';

export interface ButtonProps {
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
  /**
   * 获取按钮大小class
   * @param size
   */
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
  /**
   * 获取按钮类型class
   */
  function getType() {
    if (props.disabled) {
      return '';
    } else {
      return `fy-btn-${props.type ?? 'default'}`;
    }
  }
  return (
    <button
      className={classNames('fy-btn', `${getType()}`, {
        [`fy-btn-${getSize(props.size)}`]: true,
      })}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
