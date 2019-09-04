let express=require('express');
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let transactionLog=new Schema(
    {
       actionId:{type:String,unique:true},
       itemId:{type:String},
       operationName:{type:String},
       usedId:{type:String},
       doneById:{type:String},
       oldData:{type:String},
       newData:{type:String},
       operationDate:{type:Date,default:Date.now}
    });
mongoose.model('transactionlogmodel',transactionLog);