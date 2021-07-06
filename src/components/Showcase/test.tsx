import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import hightlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

import Showcase from '.';

describe('<Showcase />', () => {
  it('should render full Showcase', () => {
    renderWithTheme(
      <Showcase
        title="this is a title"
        highlight={hightlightMock}
        games={gamesMock}
      />,
    );

    expect(
      screen.getByRole('heading', { name: /this is a title/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Read Dead is back/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(4);
  });

  it('should render the title', () => {
    renderWithTheme(<Showcase title="this is a title" />);

    expect(
      screen.getByRole('heading', { name: /this is a title/i }),
    ).toBeInTheDocument();
  });

  it('should render the highlight', () => {
    renderWithTheme(<Showcase highlight={hightlightMock} />);

    expect(
      screen.getByRole('heading', { name: /Read Dead is back/i }),
    ).toBeInTheDocument();
  });

  it('should render the games', () => {
    renderWithTheme(<Showcase games={gamesMock} />);

    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(4);
  });
});
