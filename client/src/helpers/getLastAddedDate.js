
function getLastAddedDate() {
  let storedDate = localStorage.getItem('last_date');
  if (storedDate !== null) {
    storedDate = new Date(
      storedDate.slice(6), // year
      storedDate.slice(0,2) - 1, // month
      storedDate.slice(3,5)); // day
    }
  
  return storedDate;
}

module.exports = { getLastAddedDate };