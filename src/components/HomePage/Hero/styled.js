import { device } from 'Styles/Breakpoints';
import { StyledButton } from 'components/UI/Button/styled';
import { MainTitle } from 'components/UI/Typography';
import styled from 'styled-components';

const HERO_IMAGE_HIDDEN_BREAKPOINT = 1050;

export const Wrapper = styled.section`
  padding: 64px 0 64px 70px;
  margin: 40px 0px 40px 0px;
  width: 100%;
  height: 382px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.purple};

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    height: 305px;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px;
    margin: 30px 0px 30px 0px;
  }
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 300px;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const HeroTitleText = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;

export const PlayButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow:
    7px 23px 9px rgba(7, 21, 44, 0.11),
    4px 13px 8px rgba(7, 21, 44, 0.11),
    2px 6px 6px rgba(7, 21, 44, 0.09),
    0px 1px 3px rgba(7, 21, 44, 0.05),
    0px 0px 0px rgba(7, 21, 44, 0.02);

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    margin: 30px auto;
    width: 100%;
    justify-content: center;
  }
`;
