import { device } from 'Styles/Breakpoints';
import { SectionSubtitle } from 'components/UI/Typography';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;

  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    opacity: 0.4;
    background-image: url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  }

  ${device.sm} {
    width: 137px;
    height: 95px;
  }
`;

export const GenreName = styled(SectionSubtitle)`
  z-index: ${({ theme }) => theme.zIndex['10']};
`;
