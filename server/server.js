
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

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
  const data = req.body
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
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))