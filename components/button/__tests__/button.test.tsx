import React from 'react';
import { Button } from '../Button';
import { render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('测试button按钮', () => {
  it('默认按钮', () => {
    const wrapper = shallow(<Button>默认按钮</Button>);
    expect(wrapper.type()).toBe('button');
  });
});
