// External libraries
import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

// Utility functions
import { secondsTominutes } from 'utils/time';

// Local components
import { Heart, HeartIcon, Pause, Play } from 'components/UI/Icons/Icons';
import { SubText } from 'components/UI/Typography';

// Styled components
import {
  TableData,
  TrackInfo,
  TextWrapper,
  TrackInfoImage,
  TrackTitle,
  TrackSubtitle,
  SongNumber,
  StyledIconButton,
  TracksRow,
  IconWrapper,
} from './styled';
import { theme } from 'Styles/Theme';
import { breakpoints } from 'Styles/Breakpoints';

function TrackRow({
  index,
  track,
  onClick,
  isPlaying,
  handleSaveTrackClick,
  isSaved,
  screenWidth,
}) {
  const isMobileLayout = screenWidth > breakpoints.md;

  return (
    <TracksRow key={track?.id} onClick={() => onClick(track)}>
      <TableData>
        <SongNumber className="text">
          {track ? String(index + 1).padStart(2, '0') : <Skeleton width={27} height={27} />}
        </SongNumber>
        <IconWrapper className="icon">{isPlaying ? <Pause /> : <Play />}</IconWrapper>
      </TableData>
      <TrackInfo>
        {track ? (
          <TrackInfoImage src={track?.album?.cover_small} alt={track?.title} />
        ) : (
          <Skeleton
            width={isMobileLayout ? 65 : 45}
            height={isMobileLayout ? 65 : 45}
            borderRadius={isMobileLayout ? 15 : 10}
          />
        )}
        <TextWrapper>
          <TrackTitle>{track?.title || <Skeleton width={isMobileLayout ? 130 : 100} />}</TrackTitle>
          <TrackSubtitle>
            {track?.artist?.name || <Skeleton width={isMobileLayout ? 150 : 100} />}
          </TrackSubtitle>
        </TextWrapper>
      </TrackInfo>
      {isMobileLayout && (
        <TableData>
          <SubText>
            {track?.duration ? secondsTominutes(track?.duration) : <Skeleton width={50} />}
          </SubText>
        </TableData>
      )}
      {isMobileLayout && (
        <TableData>
          <TrackSubtitle>{track?.album?.title || <Skeleton width={150} />}</TrackSubtitle>
        </TableData>
      )}
      <TableData>
        {track ? (
          <StyledIconButton
            width={70}
            height={70}
            onClick={(event) => {
              event.stopPropagation();
              handleSaveTrackClick(track.id);
            }}
          >
            <Heart isSaved={isSaved} />
          </StyledIconButton>
        ) : (
          <StyledIconButton width={70} height={70}>
            <Skeleton width={25} height={25} />
          </StyledIconButton>
        )}
      </TableData>
    </TracksRow>
  );
}

TrackRow.propTypes = {
  onClick: PropTypes.func,
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
  index: PropTypes.number,
  isPlaying: PropTypes.bool,
  handleSaveTrackClick: PropTypes.func,
  isSaved: PropTypes.bool,
  screenWidth: PropTypes.number,
};

export default TrackRow;
