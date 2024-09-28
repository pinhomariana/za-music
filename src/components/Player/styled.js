import { SubText } from 'components/UI/Typography';
import styled from 'styled-components';
import { Text } from 'components/UI/Typography';
import { PLAYER_HEIGHT } from 'common/constants';

export const Wrapper = styled.div`
  height: ${PLAYER_HEIGHT}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex['30']};
  display: flex;
  align-items: center;
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  min-width: 300px;
`;

export const TrackImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const TrackInfoTextWrapper = styled.div`
  padding-right: 15px;
  display: flex;
  flex-direction: column;
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;
`;

export const TrackTime = styled.div`
  color: ${(props) => (props.$grey ? props.theme.colors.secondaryGrey : 'inherit')};
  margin: 0 20px;
  width: 80px;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: 60px;
  min-width: 180px;
`;
