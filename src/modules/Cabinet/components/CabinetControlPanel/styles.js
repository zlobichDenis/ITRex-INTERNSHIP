import styled from "styled-components";

export const ControlPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    width: 90%;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    @media (min-width: 1920px) {
        width: 100%;
    }
`;
