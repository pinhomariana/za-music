import { device } from 'Styles/Breakpoints';
import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 60px;
  line-height: 90px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 33px;
  line-height: 52px;

  ${device.sm} {
    font-size: 22px;
    line-height: 33px;
  }
`;

export const SectionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 23px;
  line-height: 37.5px;

  ${device.sm} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 20px;
  line-height: 26.63px;
`;

export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 18px;
  line-height: 24.2px;

  ${device.sm} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 23px;
  line-height: 27.84px;
`;
