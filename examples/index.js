import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Select } from '../components';
ReactDOM.render(
  <div>
    <Button onClick={() => console.log('aa')}>测试</Button>
    <Select>1</Select>
  </div>,
  document.getElementById('root'),
);
