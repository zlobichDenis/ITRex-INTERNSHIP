import styled from "styled-components";
import { colors } from "styles";

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`;

export const TittleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 90%;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const EmptyListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
`;

export const EmptyListMessage = styled.p`
  text-align: center;
  color: ${colors.TEXT_COLOR};
`;

