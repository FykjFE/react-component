import React from 'react';
import { Story, Meta, storiesOf } from '@storybook/react';

import { Button } from './index';
import { ButtonProps } from './Button';
import { action } from '@storybook/addon-actions';
export default {
  title: '通用组件/Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>测试</Button>;

export const Primary: Story<ButtonProps> = (args) => (
  <>
    <Button {...args}>主按钮</Button>
    <Button type={'primary'}>次按钮</Button>
  </>
);
Primary.args = {
  size: 'small',
  type: 'primary',
};

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
