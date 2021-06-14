import { screen } from '@testing-library/dom';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Test">
        <input type="text" placeholder="some input" />
      </Auth>,
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
    expect(
      screen.getByRole('heading', { name: /all your favorite/i }),
    ).toBeInTheDocument();

    expect(screen.getByText('WON')).toHaveStyle({ fontWeight: 'bold' });
    expect(
      screen.getByRole('heading', { name: /is the best and most/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /auth test/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
