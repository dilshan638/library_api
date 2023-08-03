var bookModel = require('../../models/book');
var helpers = require('../helpers/common_functions');
var  moment = require('moment');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    book : async function(req,res){
        try{
            if(!req.body.first_name || !req.body.last_name){
                return res.status(400).json({
                    error: "bad request",
                });
            }
              return res.status(200).json({status:"Registration Successfully"})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
}