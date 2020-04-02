const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Course = require('./Models/Course');
const Improvement = require('./Models/Improvement');
const Instructor = require('./Models/Instructor');
const json2csv = require('json2csv');
const jsonFromCsv = require('csvjson-json2csv');
const fs = require('fs');
const multer = require('multer');

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser());
const router = express.Router();

const path = require("path");

//connects mongo db
mongoose
	.connect('mongodb://ceab-admin:CloudComputing1@ds163757.mlab.com:63757/heroku_gj4ph953', {
		useNewUrlParser: true
	})
	.catch(e => {
		console.error('Connection error', e.message)
	})

let db = mongoose.connection;

module.exports = db

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//for uploading csv
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname)
	}
}) // create the multer instance that will be used to upload/save the file
var upload = multer({
	storage: storage
}).single('file')

//
router.get('/loadSyllabus', (req, res) => {
	code = req.query.courseCode;
	Course.findOne({
		courseCode: code
	}, (err, data) => {
		if (data != null) {
			return res.json({
				success: true,
				data: data
			});
		}
	});
});

router.get('/loadImprovement', (req, res) => {
	code = req.query.courseID;
	console.log(code);
	Improvement.findOne({
		courseID: code
	}, (err, data) => {
		if (data != null) {
			return res.json({
				success: true,
				data: data
			});
		}
	});
});


router.get('/loadInstructor', (req, res) => {
	first = req.query.instructorFirstName;
	family = req.query.instructorFamilyName;
	Instructor.findOne({
		firstName: first,
		familyName: family
	}, (err, data) => {
		if (data != null) {
			return res.json({
				success: true,
				data: data
			});
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
	Instructor.deleteMany({
		firstName: first,
		familyName: family
	}, (err, data) => {
		console.log(data);
	});
	submit.save((err) => {
		if (err) return res.json({
			success: false,
			error: err
		});
		return res.json({
			success: true
		});
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
	Course.deleteMany({
		courseCode: submit.courseCode
	}, (err, data) => {
		console.log(data);
	});
	submit.save((err) => {
		if (err) return res.json({
			success: false,
			error: err
		});
		return res.json({
			success: true
		});
	});
});

//
router.post('/submitImprovement', (req, res) => {
	let improve = req.body.info;
	let submit = new Improvement();
	for (const value of Object.keys(improve)) {
		submit[value] = improve[value];
	}
	Improvement.deleteMany({
		courseID: submit.courseID
	}, (err, data) => {
		console.log(data);
	});
	submit.save((err) => {
		if (err) return res.json({
			success: false,
			error: err
		});
		return res.json({
			success: true
		});
	});
});

//
router.get('/downloadCourses', (req, res) => {
	const filePath = path.join(__dirname, "csv-" + "today" + ".csv");
	const fields = [
		'courseName', 'courseYear', 'courseCode', 'instructorName', 'lecHours', 'tutHours', 'labHours', 'courseDescription',
		'knowledgeGA', 'knowledgeInfo', 'problemGA', 'problemInfo', 'investigationGA', 'investigationInfo', 'designGA', 'designInfo',
		'engineeringToolsGA', 'engineeringToolsInfo', 'individualGA', 'individualInfo', 'communicationGA', 'communicationInfo',
		'professionalismGA', 'professionalismInfo', 'environmentGA', 'environmentInfo', 'ethicsGA', 'ethicsInfo', 'economicsGA',
		'economicsInfo', 'learningGA', 'learningInfo', 'mathPerct', 'basicSciPerct', 'studiesPerct', 'engSciPerct', 'engDesignPerct'
	];
	let csv;
	console.log("getting courses")
	Course.find({}, (err, data) => {
		if (err) return res.json({
			success: false,
			error: err
		});

		try {
			csv = json2csv.parse(data, {
				fields
			});
		} catch (error) {
			console.error(error);
		}

		fs.writeFile(filePath, csv, function (err) {
			if (err) {
				return res.json(err).status(500);
			} else {
				setTimeout(function () {
					fs.unlink(filePath, function (err) { // delete this file after 30 seconds
						if (err) {
							console.error(err);
						}
						console.log('File has been Deleted');
					});

				}, 30000);
				res.download(filePath);
			}
		})
	})
});
router.get('/downloadTable', (req, res) => {
	const filePath = path.join(__dirname, "csv-" + "table" + ".csv");
	const fields = [
		'level','code','indicator'
	];
	let csv;
	console.log("getting table 3.1.2")
	Course.find({}, (err, data) => {
		if (err) return res.json({
			success: false,
			error: err
		});
		let test = {
			knowledge:[],
			problem : [],
			investigation : [],
			design : [],
			tools : [],
			individual : [],
			communication : [],
			professionalism : [],
			environment : [],
			ethics : [],
			economics : []	
		};
		data.forEach((course)=>{
			test.knowledge.push({indicator: course.knowledgeInfo, level : course.knowledgeGA, code: course.courseCode});
			test.problem.push({indicator: course.problemInfo, level : course.problemGA, code: course.courseCode});
			test.investigation.push({indicator: course.investigationInfo, level : course.investigationGA, code: course.courseCode});
			test.design.push({indicator: course.designInfo, level : course.designGA, code: course.courseCode});
			test.tools.push({indicator: course.engineeringToolsInfo, level : course.engineeringToolsGA, code: course.courseCode});
			test.individual.push({indicator: course.individualInfo, level : course.individualGA, code: course.courseCode});
			test.communication.push({indicator: course.communicationInfo, level : course.communicationGA, code: course.courseCode});
			test.professionalism.push({indicator: course.professionalismInfo, level : course.professionalismGA, code: course.courseCode});
			test.environment.push({indicator: course.environmentInfo, level : course.environmentGA, code: course.courseCode});
			test.ethics.push({indicator: course.ethicsInfo, level : course.ethicsGA, code: course.courseCode});
			test.economics.push({indicator: course.economicsInfo, level : course.economicsGA, code: course.courseCode});
		})

		console.log(test)


		try {
			csv = json2csv.parse(test);
		} catch (error) {
			console.error(error);
		}

		fs.writeFile(filePath, csv, function (err) {
			if (err) {
				return res.json(err).status(500);
			} else {
				setTimeout(function () {
					fs.unlink(filePath, function (err) { // delete this file after 30 seconds
						if (err) {
							console.error(err);
						}
						console.log('File has been Deleted');
					});

				}, 30000);
				res.download(filePath);
			}
		})
	})
});

router.post('/upload', function (req, res) {
	console.log("uploading...")
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
		} else if (err) {
			return res.status(500).json(err)
		}
		const csvFilePath=req.file.path;
		const csv=require('csvtojson')
		csv()
		.fromFile(csvFilePath)
		.then((jsonObj)=>{
			jsonObj.forEach((elem)=>{
				let submit = new Course();
				for (const value of Object.keys(elem)) {
					submit[value] = elem[value];
				}
				Course.deleteMany({
					courseCode: submit.courseCode
				}, (err, data) => {
					console.log(data);
				});
				submit.save((err) => {
					if (err) return res.json({
						success: false,
						error: err
					});
				});
				
			})
			return res.status(200).send(req.file)
		})
	})

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