import moment from "moment";

import { UserRoles } from "const";
import { ResolutionTableData } from "../features";

type CreateResolutionsTableDataReturnValue = Array<ResolutionTableData>;

export const createResolutionsTableData = (
  resolutions: Array<any>,
  roleName: string | null): CreateResolutionsTableDataReturnValue  => {
    if (roleName === UserRoles.PATIENT) {
      return resolutions
        .map((
          {
            next_appointment_date: nextVisit,
            resolution,
            visit_date: visitDate,
            doctor,
          },
          index) => {
          const { first_name: firstName, last_name: lastName } = doctor;

          return {
            col1: firstName,
            col2: lastName,
            col3: resolution,
            col4: moment(visitDate).format('MM/DD/YY'),
            col5: moment(nextVisit).format('MM/DD/YY'),
          }
      })
    } else {
      return resolutions
        .map((
          {
            next_appointment_date: nextVisit,
            resolution,
            visit_date: visitDate,
            patient,
          },
          index) => {
          const { first_name: firstName, last_name: lastName } = patient;

          return {
            col1: firstName,
            col2: lastName,
            col3: resolution,
            col4: moment(visitDate).format('MM/DD/YY'),
            col5: moment(nextVisit).format('MM/DD/YY'),
          }
      })
    }
};