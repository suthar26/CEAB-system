const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = Improvement;

