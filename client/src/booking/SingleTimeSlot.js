import React from 'react';
import numToTime from '../helpers/numToTime';
export default function SingleTimeSlot({ start, end, bookSlot }) {
  const formattedStart = numToTime(start);
  const formattedEnd = numToTime(end);
  return (
    <button onClick={bookSlot} value={`${start}-${end}`}>
      {formattedStart} to {formattedEnd}
    </button>
  )
}