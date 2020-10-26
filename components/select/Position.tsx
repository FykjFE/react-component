import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
let instance: any;
const Position: React.FC<any> = (props) => {
  const { targetRef, children } = props;

  if (!instance) {
    instance = document.createElement('div');
    instance.className = 'rc-position';
    document.body.appendChild(instance);
  }

  useEffect(() => {
    function setInstanceStyle() {
      const { top, left, height } = targetRef.current.getBoundingClientRect();
      const style = {
        top: document.documentElement.scrollTop + top + height + 10 + 'px',
        left: document.documentElement.scrollLeft + left + 'px',
      };
      instance.style.width = `${getComputedStyle(targetRef.current).width}`;
      instance.style.top = style.top;
      instance.style.left = style.left;
      return { top, left, height };
    }

    setInstanceStyle();
  }, [targetRef]);

  return createPortal(children, instance);
};
export default Position;
