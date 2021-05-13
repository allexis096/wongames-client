import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('<Gamecard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );
    expect(screen.getByText(props.price)).toBeInTheDocument();
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through',
    });
  });

  it('should render price a line-through when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />);

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through',
    });

    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      'text-decoration': 'line-through',
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard favorite {...props} />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should render on Fav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard favorite onFav={onFav} {...props} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
        {...props}
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem',
    });
    expect(ribbon).toBeInTheDocument();
  });
});
