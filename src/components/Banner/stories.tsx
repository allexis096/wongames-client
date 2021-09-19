import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  argTypes: {
    ribbonColor: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    ribbonSize: {
      control: {
        type: 'radio',
        options: ['normal', 'small'],
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);
WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
