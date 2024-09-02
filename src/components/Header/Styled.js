import { styled, ThemeProvider } from 'styled-components';

export const Wrapper = styled.header`
  height: 118px;
  border-radius: 0px 0px 25px 25px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
`;

export const LogoWrapper = styled.header``;
