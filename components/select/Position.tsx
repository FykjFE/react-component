import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
let instance: any;
const Position: React.FC<any> = (props) => {
  const { targetRef, children, getContainer, onNotVisibleArea } = props;
  const container = getContainer && getContainer();

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

      instance.style.top = style.top;
      instance.style.left = style.left;

      return { top, left, height };
    }

    setInstanceStyle();

    function handleScroll() {
      const { top, height } = setInstanceStyle();

      if (container.offsetTop > top) {
        onNotVisibleArea();
      }
      if (top - container.offsetTop + height > container.offsetHeight) {
        onNotVisibleArea();
      }
    }

    if (container) {
      container.addEventListener('scroll', handleScroll, false);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll, false);
      }
    };
  }, [targetRef]);

  return createPortal(children, instance);
};
export default Position;
