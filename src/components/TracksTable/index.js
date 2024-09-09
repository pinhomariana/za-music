import React from 'react';
import PropTypes from 'prop-types';
import { SubText, Text } from 'components/UI/Typography';
import { Table, TableHead, TableHeading, Line } from './styled';

import TrackRow from './TrackRow';
import Skeleton from 'react-loading-skeleton';

function TracksTable({ tracks, isLoading }) {
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first>
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
          tracks?.map((track, index) => (
            <TrackRow isLoading={isLoading} key={track.id} track={track} index={index} />
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
