import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineleft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'white',
  lineleft = false,
  lineBottom = false,
}: HeadingProps) => (
  <S.Wrapper color={color} lineleft={lineleft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
);

export default Heading;
