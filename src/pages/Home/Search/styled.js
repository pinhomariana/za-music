import { device } from 'Styles/Breakpoints';
import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from 'common/constants';
import { SectionSubtitle } from 'components/UI/Typography';
import styled from 'styled-components';

export const TableTitle = styled(SectionSubtitle)`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
`;

export const InputWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const NothingFoundText = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
