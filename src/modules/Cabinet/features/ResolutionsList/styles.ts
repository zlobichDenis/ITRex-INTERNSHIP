import styled from "styled-components";

import { colors, typography} from "styles";

export const ResolutionTable = styled.table`
  width: 90vw;
  border-spacing: 0 5px;
`;

export const ResolutionTableHead = styled.thead`
  ${typography.ORDINARY_TEXT};
  color: ${colors.GREY_MEDIUM};
`;

export const ResolutionTableHeadRow = styled.tr`
  background-color: ${colors.WHITE};
`;

export const ResolutionTableHeaderColumn = styled.th`
  text-align: left;
  padding: 20px 40px;
`;

export const ResolutionTableRow = styled.tr`
  ${typography.ORDINARY_TEXT};
  color: ${colors.BLACK};
  background-color: ${colors.WHITE};
`;

export const ResolutionTableCell = styled.td`
  padding: 20px 40px;
`;