
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
// const { addDays,
//   format,
//   compareAsc } = require("date-fns");

// Use the below to do queries through here
const pool = new Pool({
  user: 'julienguyen',
  password: '123',
  host: 'localhost',
  database: 'cllective'
});
app.use(bodyParser.json());

// Books an appointment and adds information to the database
app.post('/addData', (req, res) => {
  const data = req.body;
  pool.query(`
    INSERT INTO clients ("first_name", "last_name", "email", "phone", "text")
    VALUES 
      ('${data.first_name}',
      ' ${data.last_name}', 
      '${data.email}', 
      '${data.phone}', 
      ${data.text});`
  )
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log('query error', err.stack))
})

app.post('/addSchedule', (req, res) => {
  const schedule = req.body.dates;

  // apply yearly maintenace by deleting data if it is from the previous year
  pool.query(`
    DELETE from availability WHERE year < ${req.body.year}`)
    .then(res => { console.log(res) })
    .catch(err => console.log('query error', err.stack));
  
  // add schedule to database
  for (let date in schedule) {
    let times = schedule[date];
    for (let time in times) {
      pool.query(`
        INSERT INTO availability ("timeslot", "date", "booked", "year")
        VALUES
          (${time},
          '${date}',
           ${times[time]},
           ${date.slice(6)})`)
           .then(res => {
            console.log(res);
          })
          .catch(err => console.log('query error', err.stack))
    }
  }
});

app.get('/getTimes/:month/:day/:year', function (req, res) {
  const date = `${req.params.month}/${req.params.day}/${req.params.year}`;
  pool.query(`
    SELECT * FROM availability 
    WHERE date = '${date}'`)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err.stack))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))