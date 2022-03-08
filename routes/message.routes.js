const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Message = require("../models/Message.model");

//  POST /api/tasks  -  Creates a new task
router.post("/send", (req, res, next) => {
  const { sender, receiver, message} = req.body;
  let originalMessage= '';
  let answered = false;
  let response = null;
  //update message in case of a response
  if(req.body.isResponse){
    originalMessage = req.body.id;
    response = originalMessage;
    answered = false;
    //update original message
    Message.findById(originalMessage)
      .then((foundMessage) => {
        foundMessage.answered = true;
        foundMessage.save();
      })
  }

  if(!req.body.isResponse){
    answered = req.body.answered;

  }
  //create new message
   Message.create({sender, receiver, message, answered, response})
    .then((newMessage) => {
      res.json(response)
    })
    .catch((err) => res.json(err))
});

router.get("/get/:_id", (req,res,next) =>{
  const { _id } = req.params;
  
  Message.find({receiver: _id, answered: false})
    .populate('sender')
    .populate('receiver')
    .then((foundMessage) => {
      console.log(foundMessage);
      res.json(foundMessage);
    })
    .catch((err) => console.log(err));
})
module.exports = router;
