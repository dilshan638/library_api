var bookModel = require('../../models/book');
var autherModel = require('../../models/auther');
var helpers = require('../helpers/common_functions');
var  moment = require('moment');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    book : async function(req,res){
        try{
            if(!req.body.name || !req.body.isbn || !req.body.author){
                return res.status(400).json({
                    error: "bad request",
                });
            }
            let find_book =await helpers.findAll(null, {isbn:req.body.isbn}, null, null, null, null, null, bookModel);
             if(find_book.length>0){
                return res.status(409).json({status:"This book already exists"})
            }
            req.body.created_at=moment(Date.now()).format("YYYY-MM-DD");
            let savedata = await helpers.save(req.body, bookModel);
            return res.status(200).json({status:"Book Added"})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     books : async function(req,res){ 
        try{
            let books =await helpers.findAll(null,null, null, null, null, null, null, bookModel);
              return res.status(200).json({books})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     singleBook : async function(req,res){ 
        try{
            if(!req.params.id){
                return res.status(400).json({
                    error: "bad request",
                });
            }
            let book =await helpers.findOne(null,{id:req.params.id}, null, null, null, null, null, bookModel);
            let author =await helpers.findOne(null,{id:book.dataValues.author}, null, null, null, null, null, autherModel);
            book.dataValues.first_name=author.dataValues.first_name
            book.dataValues.last_name=author.dataValues.last_name
          return res.status(200).json({book})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     updateBook : async function(req,res){ 
        try{
            if(!req.params.id || !req.body.name){
                return res.status(400).json({
                    error: "bad request",
                });
            }
            let update = await bookModel.update({ name:req.body.name }, { where: { id: req.params.id } });
            return res.status(200).json({status:"Book Updated"})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     deleteBook : async function(req,res){ 
        try{
            if(!req.params.id ){
                return res.status(400).json({
                      error: "Missing Required ID",
              })
            }
      
            let delete_book =await helpers.deleteData(req.params.id, bookModel);
           return res.status(200).json({status:"Book Deleted"})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
      
}