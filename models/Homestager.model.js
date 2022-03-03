// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const homestagerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    contact: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: Object, required: true },
    portfolio: [String]
})

module.exports = model("Homestager", homestagerSchema);