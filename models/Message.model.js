const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    homestager: { type: Schema.Types.ObjectId, ref: "homestager" },
    message: {[type: String]}
});

module.exports = model("Project", projectSchema);