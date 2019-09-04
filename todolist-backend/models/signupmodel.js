let express=require('express');
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let signupmodelschema=new Schema(
    {
       userId:{type:String,unique:true},
       firstName:{type:String},
       lastName:{type:String},
       email:{type:String,unique:true},
       mobile:{type:String},
       password:{type:String},
       countryCode:{type:String},
       countryName:{type:String},
       countryId:{type:String}
    }
);
mongoose.model('signupModel',signupmodelschema);