import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
Default.args = {
  children: 'Buy now',
  size: 'medium',
};

export const withIcon: Story = (args) => <Button {...args} />;
withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};
