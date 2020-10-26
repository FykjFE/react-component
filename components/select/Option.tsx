import React from 'react';

export const Option: React.FC<any> = (props) => {
  const { label, value, handleSelect, data } = props;

  return (
    <div
      onClick={() => handleSelect({ value, label })}
      className={`${value === data.value ? 'rc-select-active' : ''}`}
    >
      {label}
    </div>
  );
};
