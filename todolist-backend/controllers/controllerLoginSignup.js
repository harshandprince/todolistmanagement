let express=require('express');
let mongoose=require('mongoose');
const nodemailer = require('nodemailer');
let schema=require('./../models/signupmodel');
let auth=require('./../models/authModel');
let pass=require('./../models/passResetModel');
let passResetModel=mongoose.model('passReset');
let signupmodel=mongoose.model('signupModel');
let authModel=mongoose.model('authModel');
let shortid=require('shortid');
let responseLib=require('./../library/responseLib');
let passwordHashLib=require('./../library/passwordHashLib');
let tokenLib=require('./../library/tokenGenerator');
let login=(req,res)=>{
   signupmodel.findOne({'email':req.body.email}).select('-_id -__v').exec((err,result)=>{
       if(result==undefined||result==''||result==null)
       {
           res.send(responseLib.generate(true,404,"email id not found",null));
       }
       else if(err){
           console.log('error occured while login');
           res.send(responseLib.generate(true,500,"error occured while login",null));
       }
       else{
            passwordHashLib.compareHash(req.body.password,result.password,(err,resp)=>{
                if(resp){
                    tokenLib.generateToken(result,(err,data)=>{
                        if(err){
                            console.log('error while generating token');
                            console.log(err.message);
                        }
                        else{
                            let o={};
                            o.token=data.token;
                            o.secret=data.secret;
                            o.userId=result.userId;
                            o.firstName=result.firstName;
                            let authModelData=new authModel({
                                userId:o.userId,
                                authToken:data.token,
                                secret:data.secret,
                                firstName:o.firstName
                            });
                            delete o.secret;
                            authModel.findOne({'userId':o.userId}).select('-_id -__v').exec((err,result)=>{
                            if(result==undefined||result==''||result==null){
                                authModelData.save((err,authresult)=>{
                                    if(err){console.log('token save error');console.log(err.message);}
                                    else {console.log('token saved successfully');}
                                });
                            }
                            else{
                                result.authToken=o.token;
                                result.save((err,resultauth)=>{
                                if(err){console.log('error updating auth token');
                                }
                                else{
                                console.log('authToken Updated');
                                }
                                });
                            }
                            });
                            res.send(responseLib.generate(false,200,"user verified",o));
                        }
                        });
                   }
                   else if(err){
                    res.send(responseLib.generate(true,500,"error while comparing password",null));
                   }
                   else{
                    res.send(responseLib.generate(true,500,"incorrect password",null));
                   }
            })
       }
   })
}
let signup=(req,res)=>{
let signupdata=new signupmodel({
    userId:shortid.generate(),
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:passwordHashLib.generateHash(req.body.password),
    mobile:req.body.mobile,
    countryCode:req.body.countryCode,
    countryName:req.body.countryName,
    countryId:req.body.countryId
});
signupdata.save((err,result)=>{
    if(err)
    {
        console.log('error occured user already registered');
        res.send(responseLib.generate(true,500,"user already registered",null));
    }
    else{
        let userData=result.toObject();
        delete userData._id;
        delete userData.__v;
        delete userData.password;
        res.send(responseLib.generate(false,200,"user registered successfully",userData));
    }
});
}
let forget=(req,res)=>
{
  console.log(req.body);
  
  signupmodel.findOne({'email':req.body.email},(err,result)=>{
    if(result==undefined||result==''||result==null)
    {
        res.send(responseLib.generate(true,404,"email not found",null));
    }
    else{
        let mail={
            email:req.body.email,
            resetCode:shortid.generate(),
            userId:result.userId
        }
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'dummy.foredwisor@gmail.com', 
                pass: 'Harsh@12345'
            }
        });
        transporter.sendMail({
            from: 'dummy.foredwisor@gmail.com', // sender address
            to: mail.email, // list of receivers
            subject: 'Password Reset Code', // Subject line
            text: 'reset your password using that code', // plain text body
            html: "<h1>code:</h1><p>"+mail.resetCode+"</p>" // html body
        });
        
        let passResetModelData=new passResetModel({
        userId:mail.userId,
        email:mail.email,
        resetCode:mail.resetCode
        });
        passResetModelData.save((err,result)=>{
        if(err){
          res.send(responseLib.generate(true,500,"error generating link",null));
        }
        else{
            let d=result.toJSON();
            delete d._id;
            delete d.__v;
          res.send(responseLib.generate(false,200,"code to reset password generated successfully",d));
        }
        });
    }
  })
}
let reset=(req,res)=>{
passResetModel.findOne({'resetCode':req.body.resetCode},(err,result)=>{
if(err){
res.send(responseLib.generate(true,500,"some error occured while finding reset code",null));
}
else{
    if(result==undefined||result==null||result==''){
        res.send(responseLib.generate(true,404,"reset token not found or incorrect please enter correct code or reset again",null));
    }
    else{
        if(result.used==true)
        {
            res.send(responseLib.generate(true,500,"code already used reset again",null));
        }
        else{
            console.log(result.userId);
            signupmodel.findOne({'userId':result.userId},(err,result)=>{
             if(result==undefined||result==null||result==''){
                console.log('userid not found');
             }
             else{
             result.password=passwordHashLib.generateHash(req.body.password);
             result.save((err,result)=>{
             if(err){
                 console.log('error updating password');
                 console.log(err.message);
             }
             else{
                 let o=result.toJSON();
                 delete o.password;
                 delete o._id;
                 delete o.__v;
                res.send(responseLib.generate(false,200,"password changed successfully",o));
             }
             });}
            });

            result.used=true;
            result.save((err,result)=>{
            if(err){console.log('error while updating status');}
            else{
                console.log('code used status updated');
            }
            });
        }
    }
}
})
}

module.exports={
    login:login,
    signup:signup,
    forget:forget,//to generate code and sent to email
    reset:reset//to reset users password and setting used status to true
}