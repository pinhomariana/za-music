// External libraries
import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

// Local components
import { SubText, Text } from 'components/UI/Typography';
import TrackRow from './TrackRow';
import { PlayerContext, PlayerDispatchContext } from 'context/playerContext';
import { actions } from 'context/actions';

// Styled components
import { Table, TableHead, TableHeading, Line } from './styled';
import { useWindowSize } from 'assets/hooks/useWindowSize';
import { breakpoints } from 'Styles/Breakpoints';

function TracksTable({ tracks, isLoading }) {
  const { width } = useWindowSize();
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying, savedTrackIds } = useContext(PlayerContext);

  const handleTrackClick = (clickedTrack) => {
    if (track?.id === clickedTrack.id) {
      dispatch({ type: actions.TOGGLE_PLAY });
    } else {
      dispatch({
        type: actions.SET_TRACKS_DATA,
        track: clickedTrack,
        tracks: tracks,
        isPlaying: true,
      });
    }
  };

  const handleSaveTrackClick = (trackId) => {
    dispatch({ type: actions.TOGGLE_SAVE_TRACK, trackId });
  };

  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading $first={1}>
            <SubText>{isLoading ? <Skeleton width={25} /> : '#'}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : 'Song Name'}</SubText>
          </TableHeading>
          {width > breakpoints.md && (
            <TableHeading>
              <SubText>{isLoading ? <Skeleton /> : 'Time'}</SubText>
            </TableHeading>
          )}
          {width > breakpoints.md && (
            <TableHeading>
              <SubText>{isLoading ? <Skeleton /> : 'Album name'}</SubText>
            </TableHeading>
          )}
          <TableHeading>
            <SubText>{isLoading ? <Skeleton width={70} /> : 'Actions'}</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {!isLoading &&
          tracks?.map((currentTrack, index) => (
            <TrackRow
              isPlaying={track?.id === currentTrack.id && isPlaying}
              onClick={handleTrackClick}
              isLoading={isLoading}
              key={currentTrack.id}
              track={currentTrack}
              index={index}
              handleSaveTrackClick={handleSaveTrackClick}
              isSaved={savedTrackIds.includes(currentTrack.id)}
              screenWidth={width}
            />
          ))}
        {isLoading &&
          [...Array(8).keys()].map((block) => (
            <TrackRow key={block} index={block} screenWidth={width} />
          ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
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
  isLoading: PropTypes.bool,
};

export default TracksTable;
