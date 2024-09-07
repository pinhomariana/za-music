import styled from 'styled-components';
import { Text } from 'components/UI/Typography';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.div`
  height: 95px;
  width: 95px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;
`;
