import styled from 'styled-components';

export const AppointmentsListWrapper = styled.div``;

export const AppointmentsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2vh 2vw;

  @media (min-width: 1920px) {
    flex-direction: row;
    align-self: flex-start;
  }

  @media (min-width: 768px) and (max-width: 1919px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px 20px;
  }
`;