import axios from "axios";
import { useReducer, useEffect } from "react";
import { addDays, format } from 'date-fns';
import appointmentReducer, {
  GET_SERVICES, 
  CHANGE_DATE, 
  CHANGE_SERVICE,
  GET_TIMES } from '../reducers/appointment'

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

  function changeDate(date) {
    dispatch({ type: CHANGE_DATE, value: date })
    getTimeSlots(bookingInput.serviceInfo.time, bookingInput.date);
  }

  function getTimeSlots(duration, day) {
    let formattedDate = format(bookingInput.date, 'MM/dd/yyyy');
    axios.get(`/getTimes/${formattedDate}`)
    .then(res => dispatch({type: GET_TIMES, value: { duration, data: res.data }}));
  }

  function changeService(id) {
    return axios.get(`/getService/${id}`)
    .then(res => {
      dispatch({ type: CHANGE_SERVICE, value: (res.data[0]) });
      getTimeSlots(res.data[0].time, bookingInput.date);
    })
  }


  return { bookingInput, changeDate, changeService }
}