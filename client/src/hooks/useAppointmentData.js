import axios from "axios";
import { useReducer, useEffect } from "react";
import { addDays, format } from 'date-fns';
import appointmentReducer, {
  GET_SERVICES, 
  CHANGE_DATE, 
  CHANGE_SERVICE,
  SELECT_SLOT } from '../reducers/appointment'

export default function useAppointmentData() {
  const [bookingInput, dispatch] = useReducer(appointmentReducer, {
    date: addDays(new Date(), 1),
    startTime: '',
    endTime: '',
    serviceInfo: {},
    allServices: [],
    timeSlots: []
  });

  // gets all services in database
  useEffect(() => {
    axios.get('/getServices')
    .then((res) => dispatch({type: GET_SERVICES, value: res.data}));
  }, []);

  // handles date change
  function changeDate(date) {
    let formattedDate = format(date, 'MM/dd/yyyy');
    return axios.get(`/getTimes/${formattedDate}`)
    .then(res => {
      dispatch({ type: CHANGE_DATE, 
        value: { date,
                 service: bookingInput.serviceInfo,
                 times: res.data }
                })
    })
  }

  // handles service change
  function changeService(id) {
    let formattedDate = format(bookingInput.date, 'MM/dd/yyyy');
    return Promise.all([
      axios.get(`/getService/${id}`),
      axios.get(`/getTimes/${formattedDate}`)
    ])
    .then(all => {
      dispatch({ type: CHANGE_SERVICE, 
                 value: { service: all[0].data[0],
                          times: all[1].data } });
    })
  }

  // selects a timeslot to book
  function bookSlot(slot) {
    const selectedTime = slot.target.value.split("-");
    dispatch({ type: SELECT_SLOT, 
               value: { start: selectedTime[0],
                        end: selectedTime[1] }
            });
  }

  function bookAppointment(data) {
    axios.post('/addAppointment', data)
    .then(function (response) {
      console.log(response);
    })
  }


  return { bookingInput, changeDate, changeService, bookSlot, bookAppointment }
}