import React, { useEffect, useRef, useState } from 'react';
import Position from './Position';

const Test1: React.FC<any> = (props) => {
  const { defaultValue, onChange, getContainer } = props;
  // 控制下拉框显示/隐藏
  const [visible, setVisible] = useState(false);
  // 当前选中的值
  const [data, setData] = useState({ value: defaultValue, label: '' });
  // 是否设置默认值
  const [defaultValueState, setDefaultValueState] = useState(true);
  const inputRef = useRef(null);

  // 查找defaultValue对应的label并展示出来
  useEffect(() => {
    if (!defaultValueState) return;
    const i = props.children.findIndex((n: any) => n.props.value === defaultValue);
    if (i > -1) {
      setData(props.children[i].props);
      setDefaultValueState(true);
    }
  }, [defaultValue, props.children, defaultValueState]);

  function handleSelect(data: any) {
    setData(data);
    onChange && onChange(data);
    setVisible(false);
  }

  function bindBodyClick(e: any) {
    if (e.target === inputRef.current) return;
    setVisible(false);
  }

  useEffect(() => {
    document.addEventListener('click', bindBodyClick, false);
    return () => {
      document.removeEventListener('click', bindBodyClick, false);
    };
  }, [visible]);

  return (
    <React.Fragment>
      <input defaultValue={data.label} onClick={() => setVisible(true)} ref={inputRef} readOnly />
      {visible ? (
        <Position
          onNotVisibleArea={() => setVisible(false)}
          getContainer={getContainer}
          targetRef={inputRef}
        >
          {React.Children.map(props.children, (child) =>
            React.cloneElement(child, {
              defaultValue: data.value,
              handleSelect,
            }),
          )}
        </Position>
      ) : null}
    </React.Fragment>
  );
};
export default Test1;
