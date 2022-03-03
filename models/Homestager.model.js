// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const homestagerSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: Object, required: true },
    portfolio: {[type: String]}
})

module.exports = model("Statistics", statisticsSchema);