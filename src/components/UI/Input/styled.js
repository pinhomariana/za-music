import styled from 'styled-components';

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.lightWhite};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 22px;
  line-height: 27px;
  border-radius: 30px;
  width: 100%;
  height: 59px;
  padding: 17px 54px;
  border: ${({ theme }) => theme.colors.black};
  display: flex;
  background-image: ${(props) => `url(${props.startIcon})`};
  background-repeat: no-repeat;
  background-position: 17px 19px;

  &:focus {
    border: 2px solid white;
    outline: none;
  }
`;
