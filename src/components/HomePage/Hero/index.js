import React from 'react';
import { PlayButton, TextWrapper, Wrapper } from './styled';
import desktopImage from 'assets/images/radio-img-desktop.png';
import { ButtonText, MainTitle, Text } from 'components/UI/Typography';
import { Play } from 'components/UI/Icons/Icons';

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. We will play a perfect mix!</Text>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={desktopImage} alt="hands holding a radio"></img>
    </Wrapper>
  );
}

export default Hero;
