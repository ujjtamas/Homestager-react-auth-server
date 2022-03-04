// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const homestagerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    contact: { type: String },
    description: { type: String },
    location: { type: Object },
    portfolio: [String]
})

module.exports = model("Homestager", homestagerSchema);