import styled from "styled-components";

import { colors } from "styles";

export const CreateAppointmentForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 104px;
`;

export const StageCreatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 468px;
    gap: 40px;
`;


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InputLabel = styled.label`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
`;

export const InputText = styled.input`
    width: 624px;
    height: 56px;
    background: ${colors.INPUT_COLOR};
    border: 1px solid #DCE0EC;
    border-radius: 8px;
`;

export const DatesList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 16px;
`;