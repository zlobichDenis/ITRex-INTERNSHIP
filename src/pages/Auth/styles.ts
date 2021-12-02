import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    background: url('../img/bg.png');
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) and (max-width: 1919px) {
        flex-direction: row;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    z-index: 1;

    @media (min-width: 768px) {
        flex-direction: row-reverse;
    }
`;
