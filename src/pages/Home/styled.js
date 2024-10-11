import { device } from 'Styles/Breakpoints';
import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from 'common/constants';
import { SectionSubtitle } from 'components/UI/Typography';
import styled from 'styled-components';

export const SongsTableAndArtistSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 10px);
  overflow: hidden;

  ${device.xl} {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 10px);
  }
`;

export const Greytitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const AsydeStyled = styled.aside`
  margin-left: 90px;

  ${device.xl} {
    margin-left: 0;
  }
`;
