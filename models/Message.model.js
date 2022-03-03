const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    homestager: { type: Schema.Types.ObjectId, ref: "User" },
    message: [String]
});

module.exports = model("Message", messageSchema);