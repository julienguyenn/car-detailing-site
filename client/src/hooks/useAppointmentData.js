import axios from "axios";
import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function useAppointmentData() {
  const [bookingInput, dispatch] = useReducer(reducer, {
    date: '',
    startTime: '',
    endTime: '',
    serviceInfo: '',
    allServices: []
  });

  return { bookingInput }
}