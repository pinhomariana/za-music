import { device } from 'Styles/Breakpoints';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'common/constants';
import styled from 'styled-components';

export const Wrapper = styled.header`
  height: ${HEADER_HEIGHT}px;
  border-radius: 0px 0px 25px 25px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  display: flex;

  ${device.lg} {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

export const LogoWrapper = styled.header``;
