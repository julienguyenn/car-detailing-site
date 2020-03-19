
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require("body-parser");
const app = express()
const port = 8080

// Use the below to do queries through here
const pool = new Pool({
  user: 'julienguyen',
  password: '123',
  host: 'localhost',
  database: 'cllective'
});
app.use(bodyParser.json());

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res);
// })
// .catch(err => console.error('query error', err.stack));

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/addData', (req, res) => res.send('Hello World!'))


app.post('/addData', (req, res) => {
  console.log(req.body.first_name)
  pool.query(`
  INSERT INTO sample (name)
  VALUES ('Julie');`
  )
  .then(res => {
    // console.log(res);
  })
  .catch(err => console.log('query error', err.stack))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))