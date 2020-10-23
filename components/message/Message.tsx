import React from 'react';
import { createPortal, render } from 'react-dom';
import './style/button.scss';
export interface MessageProps {
  /** 点击事件 */
  msg: string;
}

export const Message: React.FC<MessageProps> = (props) => {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'msg';
  document.body.appendChild(containerDiv);
  return createPortal(<input value={props.msg} type='text' />, containerDiv);
};

Message.defaultProps = {};
export class note {
  static success(msg: string) {
    const containerDiv = document.createElement('div');
    document.body.appendChild(containerDiv);
    // 这里返回的是对该组件的引用
    const TestCompInstance = render(<Message msg={'ss'} />, containerDiv);
    console.log(TestCompInstance);
    // 这里可以调用任何 TestCompInstance 上的方法，并且能够访问到其 this
  }
}
