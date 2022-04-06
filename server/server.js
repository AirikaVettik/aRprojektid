require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000
const apiroutes = require('./src/api/router') 
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors({ exposedHeaders: 'Content-Disposition' }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('Tere!')
})

app.use('/api', apiroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})