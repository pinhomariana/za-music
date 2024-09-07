import { SectionSubtitle } from 'components/UI/Typography';
import styled from 'styled-components';

export const ContentWrapper = styled.main`
  padding: 0 120px;
`;

export const SongsTableAndArtistSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: 135px;
  overflow: hidden;
`;

export const Greytitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const AsydeStyled = styled.aside`
  margin-left: 90px;
`;
