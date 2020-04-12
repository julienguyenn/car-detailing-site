export default function timeToNum(time) {
  return Number(time) % 1 === 0.5 ? `${Number(time) - 0.5}:30` : `${Number(time)}:00`;
}