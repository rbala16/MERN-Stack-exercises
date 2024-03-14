require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
//start up express app ,create express app
const app = express(); //express() is actually an function that we just invoke

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  
// routes
app.use('/api/workouts',workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})
})
.catch((error)=>{
  console.log(error);
})

