var autherModel = require('../../models/auther');
var helpers = require('../helpers/common_functions');
var  moment = require('moment');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    author : async function(req,res){
        try{
            if(!req.body.first_name || !req.body.last_name){
                return res.status(400).json({
                    error: "bad request",
                });
            }
            let find_auther =await helpers.findAll(null, {first_name:req.body.first_name,last_name:req.body.last_name}, null, null, null, null, null, autherModel);
             if(find_auther.length>0){
                return res.status(409).json({status:"This auther already exists"})
            }
            req.body.created_at=moment(Date.now()).format("YYYY-MM-DD");
            let savedata = await helpers.save(req.body, autherModel);
              return res.status(200).json({status:"Auther Added"})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     authors : async function(req,res){ 
        try{
            let all_authers =await helpers.findAll(null,null, null, null, null, null, null, autherModel);
              return res.status(200).json({all_authers})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     singleAuthor : async function(req,res){ 
        try{
            if(!req.params.id){
                return res.status(400).json({
                    error: "bad request",
                });
            }
            var att = ['first_name','last_name'];
            let auther =await helpers.findOne(att,{id:req.params.id}, null, null, null, null, null, autherModel);
              return res.status(200).json({auther})
         
        }catch (error) {
             console.log(error)
             res.status(500).send({message:error})
         } 
     },
     
}