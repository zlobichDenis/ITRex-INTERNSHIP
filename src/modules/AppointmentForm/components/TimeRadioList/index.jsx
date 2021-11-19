import React, { useEffect, useState } from "react"
import { Field, useFormikContext } from "formik";

import { AlertMessage } from "components";
import { getAvailableTime } from "services";
import { DatesList } from "./styles";
import { TimeInputRadio } from "./components";

export const TimeRadioList = () => {
    const [ availableHours, setAvailableHourse ] = useState(null);
    const { values } = useFormikContext();

    useEffect(() => {
        if (values.doctorName) {
            getAvailableTime(values.doctorName, values.date)
                .then((responce) => setAvailableHourse(responce.data))
        }
    }, [values.date]);

    return (
        <DatesList>
            {availableHours
                ? availableHours.length > 0
                    ?  availableHours.map((hour) => (
                        <Field key={`time-${hour}`} name="time" component={TimeInputRadio} timeValue={hour} selectedTime={values.time}/>)) 
                    : <AlertMessage message="Unfortunately, there is no available time on this date. Choose another convenient date for you."/>  
                : null}
        </DatesList>
    )
}