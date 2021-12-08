import styled from 'styled-components';

import { typography, colors } from 'styles';

type SortListProps = {
  isDisplay: boolean,
}

export const SortWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SortToggle = styled.div`
  position: absolute;
  right: 0px;
  overflow: hidden;
  border: none;
  width: 1px;
  height: 1px;
`;

export const SortList = styled.ul<SortListProps>`
  z-index: 999;
  display: ${({ isDisplay }) => isDisplay ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 30px;
  right: 0px;
  width: 180px;
  background-color: #FFFF;
`;

export const SortListItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  ${typography.NORMAL_TEXT};
  color: ${colors.BLACK};
  
  &:hover {
    background-color: ${colors.GREY_LIGHT};
  }
`;
