let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let authModel=new Schema(
    {
       userId:{type:String,unique:true},
       authToken:{type:String},
       timeOfLastLogin:{type:Date,default:Date.now},
       firstName:{type:String}
    }
);
mongoose.model('authModel',authModel);