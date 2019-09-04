let express=require('express');
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let passReset=new Schema(
    {
       userId:{type:String},
       email:{type:String},
       resetCode:{type:String,unique:true},
       used:{type:Boolean,default:false},
       created:{type:Date,default:Date.now}
    });
mongoose.model('passReset',passReset);