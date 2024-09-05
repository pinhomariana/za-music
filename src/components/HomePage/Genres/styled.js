import IconButton from 'components/UI/IconButton';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 35px;
  overflow: hidden;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 35px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

export const GenreWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  min-height: 116px;
`;

export const GenresWrapper = styled.div`
  display: flex;
`;
