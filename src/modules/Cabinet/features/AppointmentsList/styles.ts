import styled from 'styled-components';

export const AppointmentsListWrapper = styled.div`
  display: flex;
  height: 700px;
`;

export const AppointmentsList = styled.ul`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2vh 2vw;
  overflow-y: scroll;

  @media (min-width: 1920px) {
    flex-direction: row;
    align-self: flex-start;
  }

  @media (min-width: 768px) and (max-width: 1919px) {
    height: 50vh;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px 20px;
  }
`;
