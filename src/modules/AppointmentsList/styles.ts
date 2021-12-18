import styled from 'styled-components';

export const AppointmentsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const AppointmentsList = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 2vh 2vw;
  overflow: auto;

  @media (min-width: 1920px) {
    flex-direction: row;
    align-self: flex-start;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) and (max-width: 1919px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px 20px;
  }
`;
