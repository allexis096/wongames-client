import Showcase from 'components/Showcase';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import * as S from './styles';
import Base from 'templates/Base';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="MostPopular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <S.SectionUpcoming>
        <Showcase title="Upcomming" games={upcommingGames} />
        <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
      </S.SectionUpcoming>

      <Showcase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
