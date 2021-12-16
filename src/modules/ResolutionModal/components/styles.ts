import styled from "styled-components";
import { colors, typography } from "styles";

export const ResolutionFormContainer = styled.form`
  position: relative;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 560px;
  height: 472px;
  background-color: white;
  border-radius: 12px;
`;

export const ResolutionFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 40px 0 40px;
`;

export const ResolutionFormInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PatientName = styled.span`
  ${typography.BOLD_TEXT}
  color: ${colors.BLACK};
`;

export const ResolutionFormTittle = styled.span`
  ${typography.H1}
  font-size: 20px;
  color: ${colors.BLACK};
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 40px;
`;

export const FieldName = styled.span`
  ${typography.PARAGRAPH};
  font-size: 13px;
  line-height: 130%;
  color: ${colors.GREY_MEDIUM};
`;

export const ResolutionFormField = styled.textarea`
  width: 480px;
  height: 160px;
  background: white;
  border: 1px solid #dce0ec;
  border-radius: 8px;
  ${typography.NORMAL_TEXT}
  color: ${colors.BLACK};
`;

export const ResolutionFormButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: ${colors.GREY_LIGHT};
  border-radius: 12px;
`;

export const CreateButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: ${colors.BLUE};
  border-radius: 8px;
`;

export const CreateButtonText = styled.span`
  ${typography.BOLD_TEXT};
  color: white;
`;

export const CancelButton = styled(CreateButton)`
  background-color: white;
  border-radius: 8px;
`;

export const CancelButtonText = styled(CreateButtonText)`
  color: ${colors.GREY_MEDIUM};
`;