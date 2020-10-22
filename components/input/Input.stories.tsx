import React from 'react';
import { Story, Meta, storiesOf } from '@storybook/react';

import { Input } from './index';
import { action } from '@storybook/addon-actions';
import { InputProps } from './Input';
export default {
  title: '通用组件/Input',
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args}>测试</Input>;

export const Primary: Story<InputProps> = (args) => (
  <>
    <Input size={'small'} />
    <Input size={'default'} />
    <Input size={'large'} />
  </>
);
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
