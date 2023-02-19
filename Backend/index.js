const express = require('express');
const app = express();
var cors = require('cors')
const user=require('./Components/Layouts/User/user')
const student=require('./Components/Layouts/Student/Student')
const master=require('./Components/Layouts/Master/Master')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use('/master',master)
app.use('/user',user);
app.use('/student',student);





app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send({
    message:"Hello World"
  })
});

app.listen(3001, () => console.log('listening on port 3001.'));