const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Course = require('./Models/Course');
const Improvement = require('./Models/Improvement');
const Instructor = require('./Models/Instructor');
const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser());
const router = express.Router();

const path = require("path");

//connects mongo db
mongoose
  .connect('mongodb://ceab-admin:CloudComputing1@ds163757.mlab.com:63757/heroku_gj4ph953', { useNewUrlParser: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

let db = mongoose.connection;

module.exports = db

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//
router.get('/loadSyllabus', (req, res) => {
  code = req.query.courseCode;
  Course.findOne({ courseCode: code }, (err, data) => {
    if (data != null) {
      return res.json({ success: true, data: data });
    }
  });
});

router.get('/loadImprovement', (req, res) => {
  code = req.query.courseID;
  console.log(code);
  Improvement.findOne({ courseID: code }, (err, data) => {
    if (data != null) {
      return res.json({ success: true, data: data });
    }
  });
});

//
// router.get('/loadTable', (req, res) => {
//   Data.findOne({'id': 'Table3_1_2'},(err, data) => {
//     return res.json({ success: true, data: data });
//   });
// });

//
router.get('/loadInstructor', (req, res) => {
  first = req.query.instructorFirstName;
  family = req.query.instructorFamilyName;
  Instructor.findOne({ firstName: first, familyName: family }, (err, data) => {
    if (data != null) {
      return res.json({ success: true, data: data });
    }
  });
});

//
router.post('/submitInstructor', (req, res) => {
  let instructor = req.body.info;
  let submit = new Instructor();
  for (const value of Object.keys(instructor)) {
    console.log(value);
    submit[value] = instructor[value];
  }
  Instructor.deleteMany({firstName: first, familyName: family}, (err, data) => {
    console.log(data);
  });
  submit.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//
router.post('/submitSyllabus', (req, res) => {
  let syllabus = req.body.courses;
  let submit = new Course();
  for (const value of Object.keys(syllabus)) {
    submit[value] = syllabus[value];
  }
  console.log(submit)
  Course.deleteMany({courseCode: submit.courseCode}, (err, data) => {
    console.log(data);
  });
  submit.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//
router.post('/submitImprovement', (req, res) => {
  let improve = req.body.info;
  let submit = new Improvement();
  for (const value of Object.keys(improve)) {
    submit[value] = improve[value];
  }
  Improvement.deleteMany({courseID: submit.courseID}, (err, data) => {
    console.log(data);
  });
  submit.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


// append /api for our http requests
app.use('/api', router);


//have the server connect the client
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));