import styled from 'styled-components';

export const AppointmentsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

export const AppointmentsList = styled.ul`
  height: 65vh;
  display: flex;
  flex-direction: column;
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
