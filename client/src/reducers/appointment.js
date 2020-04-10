import getTimeSlots from '../helpers/getSlots';
export const GET_SERVICES = "GET_SERVICES";
export const CHANGE_DATE = "CHANGE_DATE"
export const CHANGE_SERVICE = "CHANGE_SERVICE";
export const GET_TIMES = "GET_TIMES";

export default function appointmentReducer(state, action) {
  switch (action.type) {
    case GET_SERVICES: {
      return {...state, allServices: action.value}
    }
    case CHANGE_DATE: {
      const dateSlots = getTimeSlots(action.value.service.time, action.value.times);
      return {...state, startTime: '', endTime: '', date: action.value.date, timeSlots: dateSlots}
    }
    case CHANGE_SERVICE: {
      const slots = getTimeSlots(action.value.service.time, action.value.times);
      return {...state, startTime: '', endTime:'', serviceInfo: action.value.service, timeSlots: slots }
    }
    default:
      throw new Error();
  }
}