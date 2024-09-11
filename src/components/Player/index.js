// External libraries
import React from 'react';
import Slider from 'rc-slider';

// Components
import IconButton from 'components/UI/IconButton';
import { Play, SkipLeft, SkipRight, Volume } from 'components/UI/Icons/Icons';
import { ContentWrapper } from 'components/Layout';
import { Text } from 'components/UI/Typography';

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
} from './styled';

// Theme
import { theme } from 'Styles/Theme';

const track = {
  id: 2402913845,
  title: 'Love Me Again',
  title_short: 'Love Me Again',
  title_version: '',
  link: 'https://www.deezer.com/track/2402913845',
  duration: 182,
  rank: 894246,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: 'https://cdn-preview-6.dzcdn.net/stream/c-6764ba79db7f10afc99e430bd7c1e066-3.mp3',
  md5_image: 'd46aa3a3b70786cb2137c878f1a76946',
  position: 1,
  artist: {
    id: 134200,
    name: 'V',
    link: 'https://www.deezer.com/artist/134200',
    picture: 'https://api.deezer.com/artist/134200/image',
    picture_small:
      'https://e-cdns-images.dzcdn.net/images/artist/c651ef540834eaf05d385f5638dbe720/56x56-000000-80-0-0.jpg',
    picture_medium:
      'https://e-cdns-images.dzcdn.net/images/artist/c651ef540834eaf05d385f5638dbe720/250x250-000000-80-0-0.jpg',
    picture_big:
      'https://e-cdns-images.dzcdn.net/images/artist/c651ef540834eaf05d385f5638dbe720/500x500-000000-80-0-0.jpg',
    picture_xl:
      'https://e-cdns-images.dzcdn.net/images/artist/c651ef540834eaf05d385f5638dbe720/1000x1000-000000-80-0-0.jpg',
    radio: true,
    tracklist: 'https://api.deezer.com/artist/134200/top?limit=50',
    type: 'artist',
  },
  album: {
    id: 474171105,
    title: 'Layover',
    cover: 'https://api.deezer.com/album/474171105/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/d46aa3a3b70786cb2137c878f1a76946/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/d46aa3a3b70786cb2137c878f1a76946/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/d46aa3a3b70786cb2137c878f1a76946/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/d46aa3a3b70786cb2137c878f1a76946/1000x1000-000000-80-0-0.jpg',
    md5_image: 'd46aa3a3b70786cb2137c878f1a76946',
    tracklist: 'https://api.deezer.com/album/474171105/tracks',
    type: 'album',
  },
  type: 'track',
};

function Player(props) {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage src={track.album.cover} alt={`${track?.album.title}'s photo`} />
          <TrackInfoTextWrapper>
            <Text>{track.title}</Text>
            <ArtistName>{track.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton>
            <SkipLeft />
          </IconButton>
          <IconButton width={55} height={55} withBackground>
            <Play />
          </IconButton>
          <IconButton>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider
            style={{ padding: '3px 0' }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: 'none', backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime grey>2:30</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
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

Player.propTypes = {};

export default Player;
