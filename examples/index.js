import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { note, Test1, Message, Input } from '../components';
import SelectMen from '../components/select/Menu';
function Test() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Input />
      {/*<button onClick={() => note.success('aa', document.querySelector('.rc-position'))}>++</button>*/}
      {/*<Test1>*/}
      {/*  <SelectMen label='第一' value='1'></SelectMen>*/}
      {/*  <SelectMen label='第二' value='2'></SelectMen>*/}
      {/*  <SelectMen label='第三' value='3'></SelectMen>*/}
      {/*  <SelectMen label='第四' value='4'></SelectMen>*/}
      {/*</Test1>*/}
      {/*<Test1>*/}
      {/*  <SelectMen label='第一' value='1'></SelectMen>*/}
      {/*  <SelectMen label='第二' value='2'></SelectMen>*/}
      {/*  <SelectMen label='第三' value='3'></SelectMen>*/}
      {/*  <SelectMen label='第四' value='4'></SelectMen>*/}
      {/*</Test1>*/}
    </div>
  );
}
ReactDOM.render(<Test />, document.getElementById('root'));
