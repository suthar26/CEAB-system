//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//db data structure for Improvement
const improvementSchema = new Schema(
    {
        courseName: String,
        courseID: String,
        courseYear: String,
        graduateAttribute: String,
        graduateAttributeAchieved: String,
        howAchievedKB: String,
        howAchievedPA: String,
        howAchievedI: String,
        howAchievedD: String,
        howAchievedUET: String,
        howAchievedITW: String,
        howAchievedCS: String,
        howAchievedP: String,
        howAchievedIESE: String,
        howAchievedEE: String,
        howAchievedEPM: String,
        howAchievedLLL: String,
        gradeAchievedKB: String,
        gradeAchievedPA: String,
        gradeAchievedI: String,
        gradeAchievedD: String,
        gradeAchievedUET: String,
        gradeAchievedITW: String,
        gradeAchievedCS: String,
        gradeAchievedP: String,
        gradeAchievedIESE: String,
        gradeAchievedEE: String,
        gradeAchievedEPM: String,
        gradeAchievedLLL: String,
        CourseImprovments: String
    }
);

let Improvement = mongoose.model("Improvement", improvementSchema , "improvements");

// export the new Schema so we could modify it using Node.js
module.exports = Improvement;

