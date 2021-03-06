import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /Defy death/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /Play the new Crashlands season/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://source.unsplash.com/user/willianjusten/1042x580',
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );

    const ribbon = screen.getByText(/20% off/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
