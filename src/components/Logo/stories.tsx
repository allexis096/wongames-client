import { Story, Meta } from '@storybook/react/types-6-0';
import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['white', 'black'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'large'],
      },
    },
  },
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
