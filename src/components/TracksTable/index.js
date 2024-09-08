import React from 'react';
import PropTypes from 'prop-types';
import { SubText, Text } from 'components/UI/Typography';
import {
  Table,
  TableData,
  TableHead,
  TableHeading,
  TrackInfo,
  TextWrapper,
  TrackInfoImage,
  TrackTitle,
  TrackSubtitle,
  SongNumber,
  StyledIconButton,
  Line,
} from './styled';
import IconButton from 'components/UI/IconButton';
import { HeartIcon } from 'components/UI/Icons/Icons';
import { secondsTominutes } from 'utils/time';

function TracksTable({ tracks }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeading>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Time</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Album name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Actions</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {tracks?.map((track, index) => (
          <tr key={track.id}>
            <TableData>
              <SongNumber>{String(index + 1).padStart(2, '0')}</SongNumber>
            </TableData>
            <TrackInfo>
              <TrackInfoImage src={track.album.cover_small} alt={track.title} />
              <TextWrapper>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackSubtitle>{track.artist.name}</TrackSubtitle>
              </TextWrapper>
            </TrackInfo>
            <TableData>
              <SubText>{secondsTominutes(track.duration)}</SubText>
            </TableData>
            <TableData>
              <TrackSubtitle>{track.album.title}</TrackSubtitle>
            </TableData>
            <TableData>
              <StyledIconButton width={70} height={70}>
                <HeartIcon />
              </StyledIconButton>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

export default TracksTable;
