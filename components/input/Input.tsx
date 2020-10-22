import React from 'react';
import './style/input.scss';
import classNames from 'classnames';
import getSize from '../_util/getSize';
export type InputSize = 'large' | 'default' | 'small';

export interface InputProps {
  size?: InputSize;
}

export const Input: React.FC<InputProps> = (props) => {
  const { size } = props;
  return <input className={classNames(`rc-input-${getSize(size)}`)} />;
};
