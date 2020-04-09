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
      return {...state, startTime: '', endTime: '', date: action.value}

    }
    case CHANGE_SERVICE: {
      return {...state, startTime: '', endTime:'', serviceInfo: action.value}
    }
    case GET_TIMES: {
      const duration = action.value.duration;
      const times = action.value.data;
      let start = 8;
      let result = [];
      for (let time = 8; time <= 17; time += 0.5) {
        let tempEnd = time;
        if (tempEnd > 12.5) {
          tempEnd -= 12;
        }
        if (time - duration >= start) {
          let tempStart = time - duration;
          if (tempStart > 12.5) {
            tempStart -= 12;
          }
          result.push({[tempStart]: tempEnd });
        }
        // if the time slot if taken
        if (times[tempEnd] === true) {
          start = time + 0.5;
        }
      }
      return {...state, timeSlots: result }
    }
    default:
      throw new Error();
  }
}