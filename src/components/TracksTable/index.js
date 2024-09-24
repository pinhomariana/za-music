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

function TracksTable({ tracks, isLoading }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);

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
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : 'Time'}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : 'Album name'}</SubText>
          </TableHeading>
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
            />
          ))}
        {isLoading && [...Array(8).keys()].map((block) => <TrackRow key={block} index={block} />)}
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
