import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlayButton, TextWrapper, Wrapper } from './styled';
import desktopImage from 'assets/images/radio-img-desktop.png';
import { ButtonText, MainTitle, Text } from 'components/UI/Typography';
import { Play } from 'components/UI/Icons/Icons';
import { PlayerContext, PlayerDispatchContext } from 'context/playerContext';
import { actions } from 'context/actions';

function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);

  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. We will play a perfect mix!</Text>
        <PlayButton disabled={!tracks || tracks.length <= 0} onClick={handlePlayClick}>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={desktopImage} alt="hands holding a radio"></img>
    </Wrapper>
  );
}

Hero.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    artist: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Hero;
