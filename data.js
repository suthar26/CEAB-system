const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// db data structure
const DataSchema = new Schema(
  {
    id: String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);