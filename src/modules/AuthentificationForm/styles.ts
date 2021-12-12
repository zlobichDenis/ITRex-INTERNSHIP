import styled from 'styled-components';

import { colors, formFiledSizes, typography } from 'styles';


export const FeedbackWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 24px;
  margin-top: 20%;
  padding: 32px 32px 0 32px;
  background-color: ${colors.GREY_LIGHT};
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
  width: ${formFiledSizes.MOBILE_FIELD};
  gap: 24px;

  @media (min-width: 768px) {
    width: ${formFiledSizes.DESKTOP_FIELD};
    gap: 40px;
  }
`;

export const FeedbackButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  width: ${formFiledSizes.MOBILE_FIELD};
  gap: 72px;

  @media (min-width: 768px) {
    width: ${formFiledSizes.DESKTOP_FIELD};
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
    width: ${formFiledSizes.DESKTOP_FIELD};
  }
`;

export const FeedbackTextQuestion = styled.p`
  ${typography.PARAGRAPH};
  color: ${colors.GREY_MEDIUM};
`;

export const FeedbackTextLink = styled.div`
  ${typography.BOLD_TEXT};
  color: ${colors.BLUE};
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  width: ${formFiledSizes.MOBILE_FIELD};

  @media (min-width: 768px) {
    width: ${formFiledSizes.DESKTOP_FIELD};
  }
`;