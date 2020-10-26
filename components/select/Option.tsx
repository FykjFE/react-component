import React from 'react';
import classnames from 'classnames';

export const Option: React.FC<any> = (props) => {
  const { label, value, handleSelect, data } = props;

  return (
    <div
      onClick={() => handleSelect({ value, label })}
      className={classnames('rc-select-item-option', {
        'rc-select-active': value === data.value,
      })}
    >
      {label}
    </div>
  );
};
