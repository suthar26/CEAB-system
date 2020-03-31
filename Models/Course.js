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
        problemGA: String,
        investigationGA: String,
        designGA: String,
        engineeringToolsGA: String,
        individualGA: String,
        communicationGA: String,
        professionalismGA: String,
        environmentGA: String,
        ethicsGA: String,
        economicsGA: String,
        learningGA: String,
        mathPerct: String,
        basicSciPerct: String,
        studiesPerct: String,
        engSciPerct: String,
        engDesignPerct: String
    }
);

let Course = mongoose.model("Course", courseSchema, "courses");

module.exports = Course;

