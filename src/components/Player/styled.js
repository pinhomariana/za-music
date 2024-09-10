import { SubText } from 'components/UI/Typography';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 105px;
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
  width: 300px;
`;

export const TrackImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
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
`;

export const TrackTime = styled.div`
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : 'inherit')};
`;
