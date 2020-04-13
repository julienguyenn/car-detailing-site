export default function numToTime(num) {
  return Number(num) % 1 === 0.5 ? `${Number(num) - 0.5}:30` : `${Number(num)}:00`;
}