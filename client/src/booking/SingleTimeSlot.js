import React from 'react';

export default function SingleTimeSlot({ start, end }) {
  return (
    <button>
      {start} to {end}
    </button>
  )
}