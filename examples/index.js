import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Select, Option } from '../components';
function Test() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({});
  return (
    <div>
      <Select value={state} onChange={(v) => setState(v)}>
        <Option label='第一' value='1'></Option>
        <Option label='第二' value='2'></Option>
        <Option label='第三' value='3'></Option>
        <Option label='第四' value='4'></Option>
      </Select>
    </div>
  );
}
ReactDOM.render(<Test />, document.getElementById('root'));
