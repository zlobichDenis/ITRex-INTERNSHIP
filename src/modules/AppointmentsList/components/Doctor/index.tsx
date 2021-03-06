import moment from "moment";

import { PatientAppointment } from "types";
import { DateSvg, HeartSvg } from "assets";
import {
  AppointmentsItem,
  AppointmentsItemHeader,
  UserInfoWrapper,
  UserInfo,
  UserName,
  UserItemDivider,
  UserDetails,
  VisitDate,
  VisitMessage,
  VisitMessageIcon,
  VisitMessageText,
  SpecializationName,
  VisitReason
} from "./styles";

type DoctorProps = {
  appointment: PatientAppointment,
}

export function Doctor ({ appointment }: DoctorProps) {
  const { doctor, visit_date: date, reason } = appointment;
  const { first_name: firstName, last_name: lastName, photo, specialization_name: specializationName } = doctor;

  return (
    <AppointmentsItem role="doctor">
      <AppointmentsItemHeader>
        <UserInfoWrapper>
          <img width="48" height="48" src={photo} alt="Patient" />
          <UserInfo>
            <UserName className="patient-cabinet__doctor-name">{`${firstName} ${lastName}`}</UserName>
            <SpecializationName>{specializationName}</SpecializationName>
          </UserInfo>
        </UserInfoWrapper>
      </AppointmentsItemHeader>
      <UserItemDivider />
      <UserDetails>
        <VisitDate>
          <div>
            <img src={DateSvg} width="21" height="21" alt="icon" />
          </div>
          <VisitMessageText>
            {`${moment(date).format("ddd MMM D, YYYY hh:mm A")}-${moment(date).add(1, 'hours').format('hh:mm A')} `}
          </VisitMessageText>
        </VisitDate>
        <VisitMessage>
          <VisitMessageIcon>
            <img src={HeartSvg} width="21" height="21" alt="icon" />
          </VisitMessageIcon>
          <VisitReason>{reason}</VisitReason>
        </VisitMessage>
      </UserDetails>
    </AppointmentsItem>
  );
}
