const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    answered: {type: Boolean},
    response: {type: Schema.Types.ObjectId, ref:"Message"},
    message: {type: Object}
});

module.exports = model("Message", messageSchema);