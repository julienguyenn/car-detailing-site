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
  }

  function changeService(id) {
    let formattedDate = format(bookingInput.date, 'MM/dd/yyyy');
    return Promise.all([
      axios.get(`/getService/${id}`),
      axios.get(`/getTimes/${formattedDate}`)
    ])
    .then(all => {
      dispatch({ type: CHANGE_SERVICE, 
                 value: { data: res.data[0],
                          date: bookingInput.date } });
    })
  }


  return { bookingInput, changeDate, changeService }
}