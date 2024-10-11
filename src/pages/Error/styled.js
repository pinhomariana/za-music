import { device } from 'Styles/Breakpoints';
import {
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_PLAYER_HEIGHT,
  PLAYER_HEIGHT,
} from 'common/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${PLAYER_HEIGHT}px - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;

  ${device.lg} {
    padding-bottom: calc(100vh - ${MOBILE_HEADER_HEIGHT}px - ${MOBILE_PLAYER_HEIGHT}px);
  }
`;
