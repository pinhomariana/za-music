import { HEADER_HEIGHT, PLAYER_HEIGHT } from 'common/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${PLAYER_HEIGHT}px - ${HEADER_HEIGHT}px);
`;
