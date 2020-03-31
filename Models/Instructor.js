const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = Instructor;

