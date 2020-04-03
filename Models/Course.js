//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//db data structure for Course
const courseSchema = new Schema(
    {
        courseName: String,
        courseYear: String,
        courseCode: String,
        instructorName: String,
        lecHours: String,
        tutHours: String,
        labHours: String,
        courseDescription: String,
        knowledgeGA: String,
        knowledgeInfo: String,
        problemGA: String,
        problemInfo: String,
        investigationGA: String,
        investigationInfo: String,
        designGA: String,
        designInfo: String,
        engineeringToolsGA: String,
        engineeringToolsInfo: String,
        individualGA: String,
        individualInfo: String,
        communicationGA: String,
        communicationInfo: String,
        professionalismGA: String,
        professionalismInfo: String,
        environmentGA: String,
        environmentInfo: String,
        ethicsGA: String,
        ethicsInfo: String,
        economicsGA: String,
        economicsInfo: String,
        learningGA: String,
        learningInfo: String,
        mathPerct: String,
        basicSciPerct: String,
        studiesPerct: String,
        engSciPerct: String,
        engDesignPerct: String
    }
);

let Course = mongoose.model("Course", courseSchema, "courses");

// export the new Schema so we could modify it using Node.js
module.exports = Course;

