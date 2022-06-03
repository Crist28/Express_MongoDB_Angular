'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmployeesSchema = Schema({
    name: String,
    description: String,
    year: Number,
    image: String,
    user:{type: Schema.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Employees',EmployeesSchema);