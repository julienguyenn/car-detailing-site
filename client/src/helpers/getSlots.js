import axios from "axios";

function getTimeSlots(duration, date) {
  let formattedDate = format(date, 'MM/dd/yyyy');
  axios.get(`/getTimes/${formattedDate}`)
  .then(res => {
      const times = res;
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
  });
}