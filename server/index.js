require('dotenv').config();

const express = require('express');
//start up express app ,create express app
const app = express(); //express() is actually an function that we just invoke

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  
// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
  })

  // listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
  })