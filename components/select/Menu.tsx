import React, { useEffect, useState } from 'react';

const SelectMen: React.FC<any> = (props) => {
  const [selected, setSelected] = useState(false);
  const { label, value, className = '', handleSelect, defaultValue } = props;

  useEffect(() => {
    if (defaultValue === value) {
      setSelected(true);
    }
  }, [value, defaultValue]);
  return (
    <div
      onClick={() => handleSelect({ value, label })}
      className={`${className} ${selected ? 'll-selected' : ''}`}
    >
      {label}
    </div>
  );
};
export default SelectMen;
