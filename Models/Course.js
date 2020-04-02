const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = Course;

