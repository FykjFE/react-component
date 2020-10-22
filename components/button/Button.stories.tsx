import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta, storiesOf } from '@storybook/react';

import { Button } from './index';
import { ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta;

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
