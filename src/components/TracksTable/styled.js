import IconButton from 'components/UI/IconButton';
import { SubText, Text } from 'components/UI/Typography';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-top: 35px;
`;

export const TableHead = styled.thead`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryGrey};
  text-align: left;
`;

export const TableHeading = styled.th`
  padding: 10px 20px 15px ${(props) => (props.first ? '20px' : '0')};
`;

export const Line = styled.td`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 50.54%,
    rgba(198, 198, 198, 0) 98.02%
  );
`;
