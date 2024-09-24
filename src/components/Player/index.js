// External libraries
import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from 'rc-slider';

// Components
import IconButton from 'components/UI/IconButton';
import { Pause, Play, SkipLeft, SkipRight, Volume } from 'components/UI/Icons/Icons';
import { ContentWrapper } from 'components/Layout';

// Styled Components
import {
  ArtistName,
  TrackImage,
  TrackInfoTextWrapper,
  TrackInfoWrapper,
  Wrapper,
  ControlsWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
  TrackTitle,
} from './styled';

// Theme
import { theme } from 'Styles/Theme';
import { secondsTominutes } from 'utils/time';
import { PlayerContext, PlayerDispatchContext } from 'context/playerContext';
import { actions } from 'context/actions';

function Player() {
  const { track, isPlaying } = useContext(PlayerContext);
  const dispatch = useContext(PlayerDispatchContext);

  const audioRef = useRef();
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.5,
  });

  const togglePlay = () => dispatch({ type: actions.TOGGLE_PLAY });

  const handleNextSong = () => dispatch({ type: actions.NEXT_SONG });

  const handlePreviousSong = () => dispatch({ type: actions.PREV_SONG });

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 0.5;
    onVolumeChange(newVolume);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDreag = (newTime) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = newTime;

    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef.current) return;

    audioRef.current.volume = newVolume;

    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = playerState.volume;

    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }
  }, [track, isPlaying, playerState.volume]);

  if (!track) {
    return null;
  }

  return (
    <Wrapper>
      <ContentWrapper display="flex" $items="center">
        <audio
          ref={audioRef}
          src={track.preview}
          onLoadedMetadata={onTimeUpdate}
          onTimeUpdate={onTimeUpdate}
          hidden
          onEnded={handleNextSong}
        />
        <TrackInfoWrapper>
          <TrackImage src={track.album.cover} alt={`${track?.album.title}'s photo`} />
          <TrackInfoTextWrapper>
            <TrackTitle>{track.title}</TrackTitle>
            <ArtistName>{track.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton>
            <SkipLeft onClick={handlePreviousSong} />
          </IconButton>
          <IconButton onClick={togglePlay} width={55} height={55} withBackground>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton>
            <SkipRight onClick={handleNextSong} />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>{secondsTominutes(playerState.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDreag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            style={{ padding: '3px 0' }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: 'none', backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime grey>{secondsTominutes(playerState.duration)}</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton height={24} width={24}>
            <Volume onClick={toggleVolume} />
          </IconButton>
          <Slider
            step={0.01}
            min={0}
            max={1}
            value={playerState.volume}
            onChange={onVolumeChange}
            style={{ padding: '3px 0' }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: 'none', backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Player;
