import React, { useEffect, useRef, useState } from 'react';
import Position from './Position';

const Select: React.FC<any> = (props) => {
  const { value, onChange } = props;
  const [visible, setVisible] = useState(false);
  const inputRef = useRef(null);

  function handleSelect(data: any) {
    onChange(data);
    setVisible(false);
  }

  function bindBodyClick(e: any) {
    if (e.target !== inputRef.current) {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', bindBodyClick, false);
    return () => {
      document.removeEventListener('click', bindBodyClick, false);
    };
  }, [visible]);

  return (
    <>
      <input value={value.value} onClick={() => setVisible(true)} ref={inputRef} />
      {visible && (
        <Position targetRef={inputRef}>
          {React.Children.map(props.children, (child) =>
            React.cloneElement(child, {
              data: value,
              handleSelect,
            }),
          )}
        </Position>
      )}
    </>
  );
};
export { Select };
