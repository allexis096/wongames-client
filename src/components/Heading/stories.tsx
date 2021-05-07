import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
    color: {
      control: {
        type: 'radio',
        options: ['white', 'black'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium'],
      },
    },
    lineColor: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;
Default.args = {
  children: 'Most Populars',
  color: 'white',
};
