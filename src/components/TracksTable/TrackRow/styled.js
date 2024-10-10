import styled from 'styled-components';
import { SubText, Text } from 'components/UI/Typography';
import IconButton from 'components/UI/IconButton';
import { device } from 'Styles/Breakpoints';

export const TableData = styled.td`
  padding: 10px 50px 10px 0;

  ${device.md} {
    padding: 10px 20px 10px 0;
  }
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;

  ${device.md} {
    gap: 10px;
  }
`;

export const TracksRow = styled.tr`
  cursor: pointer;
  transition: background-color 0ms.2s ease-in-out;
  &:hover {
    .text {
      display: none;
    }

    .icon {
      display: block;
    }

    background-color: ${({ theme }) => theme.colors.lightWhite};
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
  }
  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;

  ${device.sm} {
    width: 45px;
    height: 45px;
    border-radius: 10px;
  }
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TrackSubtitle = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SongNumber = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const IconWrapper = styled.div`
  display: none;
  margin: 0 auto;
  width: 20px;
  height: 20px;
`;
