import styled from "styled-components";

import { colors, formFiledSizes } from "styles";

type FeedbackButtonProps = {
    itsSignIn: boolean,
}

export const FeedbackWrapper = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 24px;
    margin-top: 20%;
    padding: 32px 32px 0 32px;
    background-color: ${colors.FORM_BACKGROUND_COLOR};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    @media (min-width: 768px) {
        padding: 90px;
        width: 560px;
        gap: 72px;
        margin: 0;
        border-radius: 0;
    };
`;

export const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${formFiledSizes.MOBILE};
    gap: 24px;

    @media (min-width: 768px) {
        width: ${formFiledSizes.DESKTOP};
        gap: 40px;
    }
`;

export const FeedbackButtons = styled.div<FeedbackButtonProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    width: ${formFiledSizes.MOBILE};
    gap: ${({ itsSignIn }) => itsSignIn ? "72px" : "32px"};

    @media (min-width: 768px) {
        width: ${formFiledSizes.DESKTOP};
        ${({ itsSignIn }) => itsSignIn ? "gap: 256px" : null};
    }
`;

export const FeedbackText = styled.div`
    display: flex;
    flex-direction: column; 
    align-self: flex-start;
    width: 100%;
    gap: 10px; 

    @media (min-width: 768px) {
        flex-direction: row;
        width: ${formFiledSizes.DESKTOP};
    }
`;

export const FeedbackTextQuestion = styled.p`
    font-family: "Poppins";
    font-weight: 500px;
    font-size: 15px;
    line-height: 140%;
    color: ${colors.TEXT_COLOR};
`;

export const FeedbackTextLink = styled.div`
    font-family: "Poppins";
    font-weight: 600px;
    font-size: 15px;
    line-height: 130%;
    color: ${colors.TEXT_LINK_COLOR};
`;