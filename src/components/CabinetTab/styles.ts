import styled from 'styled-components'

import { colors, typography } from 'styles'

type TabProps = {
    isActive: boolean,
}

export const Tab = styled.span<TabProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color:${({ isActive }): string => (
    isActive
      ? colors.BLUE
      : colors.WHITE
  )};
    color: ${({ isActive }): string => (
    isActive
      ? colors.WHITE
      : colors.BLUE
  )};
    border-radius: 8px; 
    ${typography.INPUT_TEXT};
    font-size: 15px;
`;