import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 64px 0 64px 123px;
  margin: 40px 0px 40px 0px;
  width: 100%;
  height: 382px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TextWrapper = styled.div``;

export const PlayButton = styled.button`
  border-radius: 20px;
  border-style: none;
  height: 63px;
  width: 152px;
  padding: 18px 35px;
  margin-top: 52px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow:
    7px 23px 9px rgba(7, 21, 44, 0.11),
    4px 13px 8px rgba(7, 21, 44, 0.11),
    2px 6px 6px rgba(7, 21, 44, 0.09),
    0px 1px 3px rgba(7, 21, 44, 0.05),
    0px 0px 0px rgba(7, 21, 44, 0.02);

  &:hover {
    opacity: 0.8;
  }
`;
