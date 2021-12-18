import styled from "styled-components";

import { colors, typography} from "styles";

type ResolutionTablePaginationButtonProps = {
  isActive: boolean
}

export const ResolutionTableContainer = styled.div`
  width: 80vw;
  height: 60vh;
  overflow-y: scroll;
  
  @media (min-width: 1920px) {
    width: 90vw;
  }
`;

export const ResolutionTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0 5px;
`;

export const ResolutionTableHead = styled.thead`
  ${typography.ORDINARY_TEXT};
  color: ${colors.GREY_MEDIUM};
`;

export const ResolutionTableHeadRow = styled.tr`
  background-color: ${colors.WHITE};
`;

export const ResolutionTableHeaderCell = styled.th`
  text-align: left;
  padding: 20px 40px;
`;

export const ResolutionTableRow = styled.tr`
  height: 64px;
  ${typography.ORDINARY_TEXT};
  color: ${colors.BLACK};
  background-color: ${colors.WHITE};
`;

export const ResolutionTableCell = styled.td`
  padding: 20px 40px;
`;

export const ResolutionTablePaginationButtonsContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  gap: 24px;
`;

export const ResolutionTablePaginationButton = styled.button<ResolutionTablePaginationButtonProps>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  ${typography.BOLD_TEXT};
  color: ${({ isActive }) => isActive ? colors.WHITE : colors.GREY_MEDIUM};
  background-color: ${({ isActive }) => isActive ? colors.BLUE : "transparent"};
`;