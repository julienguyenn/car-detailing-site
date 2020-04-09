import axios from "axios";
import { useReducer, useEffect } from "react";
import { addDays } from 'date-fns';
import appointmentReducer, {
  GET_SERVICES, 
  CHANGE_DATE, 
  CHANGE_SERVICE } from '../reducers/appointment'

export default function useAppointmentData() {
  const [bookingInput, dispatch] = useReducer(appointmentReducer, {
    date: addDays(new Date(), 1),
    startTime: '',
    endTime: '',
    serviceInfo: {},
    allServices: []
  });

  // gets all services in database
  useEffect(() => {
    axios.get('/getServices')
    .then((res) => dispatch({type: GET_SERVICES, value: res.data}));
  }, []);

  const changeDate = date => dispatch({ type: CHANGE_DATE, value: date })

  function changeService(id) {
    return axios.get(`/getService/${id}`)
    .then(res => dispatch({ type: CHANGE_SERVICE, value: (res.data[0]) }));
  }

  return { bookingInput, changeDate, changeService }
}