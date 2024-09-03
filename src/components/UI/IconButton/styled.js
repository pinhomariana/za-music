import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: ${(props) => props.width || 20}px;
  height: ${(props) => props.height || 20}px;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out;

  ${(props) =>
    props.$withBackground &&
    css`
      border-radius: 50%;
      background-color: ${(props) => props.backgroundColor || props.theme.colors.lightWhite};
    `};

  &:hover {
    opacity: 0.6;
  }
`;
