import moment from "moment";

export const doctors = [
    {
        firstName: 'Jane',
        lastName: 'Cooper',
        occupation: 'Therapist',
        id: 1,
        photo: 'img/person-photo-1.png',
        date: moment('10/09/2021 09:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "15/11/2021": {
                "4:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "16/11/2021": {
                "5:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
    {
        firstName: 'Courtney',
        lastName: 'Henry',
        occupation: 'Therapist',
        id: 2,
        photo: 'img/person-photo-2.png',
        date: moment('11/09/2021 10:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "17/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "2:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "18/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
    {
        firstName: 'Arlene',
        lastName: 'McCoy',
        occupation: 'Therapist',
        id: 3,
        photo: 'img/person-photo-3.png',
        date: moment('10/09/2021 11:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "15/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "16/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
    {
        firstName: 'Bessie',
        lastName: 'Cooper',
        occupation: 'Doctor',
        id: 4,
        photo: 'img/person-photo-4.png',
        date: moment('10/09/2021 12:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "15/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "16/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
    {
        firstName: 'Annete',
        lastName: 'Black',
        occupation: 'Therapist',
        id: 5,
        photo: 'img/person-photo-5.png',
        date: moment('10/09/2021 13:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "15/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "18/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
    {
        firstName: 'Esther',
        lastName: 'Howard',
        occupation: 'Doctor',
        id: 6,
        photo: 'img/person-photo-6.png',
        date: moment('10/09/2021 14:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "15/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "20/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
    {
        firstName: 'Jerome',
        lastName: 'Bell',
        occupation: 'Doctor',
        id: 7,
        photo: 'img/person-photo-7.png',
        date: moment('10/09/2021 15:00:00').format('dddd, MMMM Do YYYY, h:mm:ss'),
        appointment: 'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
        isConfirmAppointment: Math.random() > 0.5,
        availableTime: {
            "14/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "15/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "6:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
            "19/11/2021": {
                "9:00 AM": {
                    isAvailable: true,
                    patient: null,
                },
                "10:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "11:00 AM" : {
                    isAvailable: true,
                    patient: null,
                },
                "12:00 PM" : {
                    isAvailable: true,
                    patient: null,
                }
            }, 
        }
    },
];