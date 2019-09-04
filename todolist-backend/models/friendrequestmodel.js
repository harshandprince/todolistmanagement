let express=require('express');
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let friendrequestschema=new Schema(
    {
       userId:{type:String},//who create
       requestedPersonID:{type:String},//who recieve request
       requestedPersonName:{type:String},
       requestSent:{type:Boolean,default:false},
       requestTime:{type:Date,default:Date.now()},
       requestaccepted:{type:Boolean,default:false}
    }
);
mongoose.model('friendrequestmodel',friendrequestschema);