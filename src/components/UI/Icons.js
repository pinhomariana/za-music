import styled from 'styled-components';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import { ReactComponent as SkipIcon } from 'assets/skip.svg';
import { ReactComponent as PauseIcon } from 'assets/pause.svg';
import { ReactComponent as VolumeIcon } from 'assets/volume.svg';
import { ReactComponent as MusicIcon } from 'assets/music.svg';
import { ReactComponent as ArrowcIcon } from 'assets/arrow.svg';
import { ReactComponent as SerchIcon } from 'assets/search.svg';
import { ReactComponent as HeartIcon } from 'assets/heart.svg';

const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || 'white'};
  stroke: ${(props) => props.color || 'white'};
`;

const SkipLeft = styled(SkipIcon)`
  fill: ${(props) => props.color || 'white'};
  stroke: ${(props) => props.color || 'white'};
`;

const SkipRight = styled(SkipIcon)`
  fill: ${(props) => props.color || 'white'};
  stroke: ${(props) => props.color || 'white'};
  transform: rotate(180deg);
`;

const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || 'white'};
  stroke: ${(props) => props.color || 'white'};
`;

const Volume = styled(VolumeIcon)`
  path {
    stroke: ${(props) => props.strokeColor || 'white'};
  }
`;

const Music = styled(MusicIcon)`
  path {
    stroke: ${(props) => props.strokeColor || 'white'};
  }
`;

const ArrowLeft = styled(ArrowcIcon)`
  path {
    stroke: ${(props) => props.strokeColor || 'white'};
  }
`;

const ArrowRight = styled(ArrowcIcon)`
  path {
    stroke: ${(props) => props.strokeColor || 'white'};
  }
  transform: rotate(180deg);
`;

const Search = styled(SerchIcon)`
  path {
    fill: ${(props) => props.fillColor || 'white'};
  }
`;

const heart = styled(HeartIcon)`
  path {
    fill: ${(props) => props.fillColor || 'white'};
  }
`;

export {
  Play,
  SkipLeft,
  SkipRight,
  Pause,
  Volume,
  Music,
  ArrowLeft,
  ArrowRight,
  Search,
  HeartIcon,
};
