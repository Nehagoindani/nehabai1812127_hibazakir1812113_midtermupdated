const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CvSchema = new Schema({
    name : {type : String,  },
    Instititute_name : {type : String },
    Program: {type : String,  },
    start_Date1: {type : String},
    End_Date1: {type : String},
      Field: {type : String},
     Languages: {type : String},
     activity: {type : String},
     Project_name : {type : String},
     start_Date2: {type : String},
     End_Date2: {type : String},
     field: {type : String},
    Company_name : {type : String},
    Designation2 : {type : String},
    start_Date3: {type : String},
    End_Date3: {type : String},
    Responsibilities: {type : String},
    name2: {type: String},
    Company: {type: String},
    Contact: {type: Number},
    Email: {type: String}
}); 

module.exports = mongoose.model('Cv', CvSchema);