const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Homestager = require("../models/Homestager.model");
const Message = require("../models/Message.model");
const { isAuthenticated } = require('../middleware/jwt.middleware.js');

const router = express.Router();

const saltRounds = 10;

router.post('/upload', (req, res, next) => {
  const { url, id} = req.body;

  if(id=='' || id== null || id == 'undefined'){
    console.log('Error while uploading');
  }

  //Find the user
  User.findById(id)
    .then((foundUser) => {
      // If the user with the same email already exists, send an error response
      if (foundUser) {}
      //Find Homestager and update portfolio
      Homestager.findOne({user: id})
        .then((foundHomestager) => {
          
          if(foundHomestager.portfolio.indexOf(url) == -1){
            foundHomestager.portfolio.push(url);
            foundHomestager.save();
            
            console.log('portfolio updated');
            res.status(201).json({message: 'updated'});
          }
          
        })
        .catch((err) => console.log(err));
    })
    .catch((err)=>console.log(err));
});

router.get('/profile/:userid', (req,res,next) =>{
  const { userid } = req.params;
  let resp = {};
  
   User.findById(userid) 
      .then((foundUser) => {
        if(foundUser){
          resp.name = foundUser.name;
          Homestager.findOne({user: userid})
            .then((foundHomestager)=> {
              if(foundHomestager){
              resp.contact = foundHomestager.contact;
              resp.description = foundHomestager.description;
              resp.location = foundHomestager.location;
              resp.portfolio = foundHomestager.portfolio;
              resp.isHomestager = true;
              }
              if(!foundHomestager){
                resp.isHomestager = false;
              }
              return resp;
            })
            .then(()=>{
              res.status(200).json(resp);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  })

  router.get('/homestagers',(req,res,next) =>{
    const resp = {};
    Homestager.find({})
      .populate('user')
      .then((foundHomestagers) => {
        resp.homestagers = foundHomestagers;
        return resp;
      })
      .then(() => {
        res.status(200).json(resp);
      })
      .catch((err) => console.log(err)) 
    /* User.find({isHomestager: true})
      .then((foundHomestagers) => {
        resp.homestagers = foundHomestagers;
        return resp;
      })
      .then(() => {
        res.status(200).json(resp);
      })
      .catch((err) => console.log(err)) */
  })

  router.post('/profile', (req,res,next) =>{
    let resp={};
    const { name , id } = req.body;

    User.findById(id)
      .then((foundUser) => {
        if(foundUser){
          foundUser.name = name;
          foundUser.save();
          resp.name = name;
        }
      })
      .then(() => {
        res.status(201).json(resp);
      })
      .catch((err) =>{console.log(err)})
  })

module.exports = router;