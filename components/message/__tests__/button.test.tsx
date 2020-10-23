import React from 'react';
import { Message } from '../Message';
import { render, shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('测试button按钮', () => {
  it('默认按钮', () => {
    const wrapper = shallow(<Message>默认按钮</Message>);
    expect(wrapper.type()).toBe('button');
  });
  it('主按钮', () => {
    const wrapper = shallow(<Message type={'primary'}>主按钮</Message>);
    expect(wrapper.find('.fy-btn').hasClass('fy-btn-primary')).toBe(true);
  });
  it('失效按钮', () => {
    const wrapper = shallow(<Message disabled>默认按钮</Message>);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });
  it('小型按钮', () => {
    const wrapper = mount(<Message size={'small'}>小型按钮</Message>);
    console.log(wrapper);
    expect(wrapper.find('.fy-btn').hasClass('fy-btn-sm')).toBe(true);
  });
  it('大型按钮', () => {
    const wrapper = shallow(<Message size={'large'}>大型按钮</Message>);
    expect(wrapper.find('.fy-btn').hasClass('fy-btn-lg')).toBe(true);
  });
});
