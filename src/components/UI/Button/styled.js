import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 20px;
  border-style: none;
  height: 63px;
  width: 152px;
  padding: 18px 35px;
  margin-top: 52px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  box-shadow:
    7px 23px 9px rgba(7, 21, 44, 0.11),
    4px 13px 8px rgba(7, 21, 44, 0.11),
    2px 6px 6px rgba(7, 21, 44, 0.09),
    0px 1px 3px rgba(7, 21, 44, 0.05),
    0px 0px 0px rgba(7, 21, 44, 0.02);

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
