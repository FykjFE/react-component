import React from 'react';
import { Button } from '../Button';
import { render, shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('测试button按钮', () => {
  it('默认按钮', () => {
    const wrapper = shallow(<Button>默认按钮</Button>);
    expect(wrapper.type()).toBe('button');
  });
  it('主按钮', () => {
    const wrapper = shallow(<Button type={'primary'}>主按钮</Button>);
    expect(wrapper.find('.fy-btn').hasClass('fy-btn-primary')).toBe(true);
  });
  it('失效按钮', () => {
    const wrapper = shallow(<Button disabled>默认按钮</Button>);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });
  it('小型按钮', () => {
    const wrapper = mount(<Button size={'small'}>小型按钮</Button>);
    console.log(wrapper);
    expect(wrapper.find('.fy-btn').hasClass('fy-btn-sm')).toBe(true);
  });
  it('大型按钮', () => {
    const wrapper = shallow(<Button size={'large'}>大型按钮</Button>);
    expect(wrapper.find('.fy-btn').hasClass('fy-btn-lg')).toBe(true);
  });
});
