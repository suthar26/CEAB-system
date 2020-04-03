//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//db data structure for Instructor
const instructorSchema = new Schema(
    {
        familyName: String,
        firstName: String,
        acadRank: String,
        hireDate: String,
        highestDegree: String,
        awardDate: String,
        awardingHEI: String,
        country: String,
        licStatus: String,
        awardingCA: String,
        hqpSupervised: String,
        yearsNonAcademicExp: String,
        typeNonAcademicExp: String
    }
);

let Instructor = mongoose.model("Instructor", instructorSchema , "instructors");

// export the new Schema so we could modify it using Node.js
module.exports = Instructor;

