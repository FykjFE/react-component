import React, { useEffect, useRef, useState } from 'react';
import './style/select.scss';

interface ButtonProps {
  onClick?: () => void;
}

export const Select: React.FC<ButtonProps> = (props) => {
  const [isShow, setIsShow] = useState(false);
  const iptRef = useRef(null);
  function documentClickHandler() {
    setIsShow(false);
  }
  useEffect(() => {
    window.addEventListener('click', documentClickHandler);
    return () => {
      window.removeEventListener('click', documentClickHandler);
    };
  }, []);
  useEffect(() => {
    let instance: HTMLDivElement;
    if (document.querySelector('#picker')) {
    } else {
      instance = document.createElement('div');
      instance.id = 'picker';
      document.body.appendChild(instance);
    }
    return () => {
      if (instance) {
        document.body.removeChild(instance);
      }
    };
  }, []);
  return (
    <div className={'rc-select-wrap'}>
      <input
        style={{ width: '300px' }}
        ref={iptRef}
        onClick={(event) => {
          event.stopPropagation();
          setIsShow(true);
        }}
        type='text'
      />
      {isShow && (
        <div
          style={{ width: (iptRef.current as any).clientWidth }}
          className={'rc-select-dropdown'}
        >
          1111
        </div>
      )}
    </div>
  );
};
