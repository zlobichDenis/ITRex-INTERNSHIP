import styled from 'styled-components';

import { colors } from 'styles';

type RadioWrapperProps = {
    isSelected: boolean,
}

export const RadioWrapper = styled.label<RadioWrapperProps>`
    display: flex;
    padding: 8px 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    background: ${colors.WHITE};
    color: ${({ isSelected }) => isSelected ? colors.BLUE : colors.BLACK};
    border: 1px solid #7297FF;
    box-sizing: border-box;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 8px;
`;

export const RadioInput = styled.input`
    width: 0px;
`;