let express=require('express');
let mongoose=require('mongoose');
let shortid=require('shortid');
let schema=require('./../models/signupmodel');
let auth=require('./../models/authModel');
let list=require('./../models/listmodel');
let friend=require('./../models/friendrequestmodel');
let friendmodel=mongoose.model('friendrequestmodel');
let listmodel=mongoose.model('listModel');
let signupmodel=mongoose.model('signupModel');
let authModel=mongoose.model('authModel');
let responseLib=require('./../library/responseLib');
let k;
let showUsers=(req,res)=>{
signupmodel.find((err,result)=>{
if(err)
{
    console.log('error retreiveing user list');
    res.send(responseLib.generate(true,500,'some error occured',null));
}
else{
    let userstoshow=[];
    for(let d of result)
    {
        this.f=d.toObject();
        if(d.userId==req.user.userId)
        {}
       else{
        delete this.f._id;
        delete this.f.__v;
        delete this.f.password;
        userstoshow.push(this.f);
        this.f="";
    }}
    if(userstoshow==''||userstoshow==null||userstoshow==undefined)
    {
        res.send(responseLib.generate(true,404,'no users found to display',null));
    }
    else{
    res.send(responseLib.generate(false,200,'users found',userstoshow));
    }
}
});
}
let showrequestsentstatus=(req,res)=>{
    friendmodel.find({userId:req.user.userId,requestaccepted:false}).select('-_id -__v').exec((err,result)=>{
        if(err)
        {console.log('error while finding request status');
        res.send(responseLib.generate(true,500,'error while loading request statuses',null));
    }
        else if(result==null||result==''||result==undefined)
        {
            res.send(responseLib.generate(true,'404','no users found to show status',null));
        }
        else
        {
          res.send(responseLib.generate(false,200,'loading request status',result));
        }
    });
}
let showfriends=(req,res)=>
{
   friendmodel.find({ $or:[ {requestedPersonID:req.user.userId,requestaccepted:true}, {userId:req.user.userId,requestaccepted:true} ] }).select('-_id -__v').exec((err,result)=>{
   if(err){console.log('some error while loading friends');
   console.log(err.message);
   res.send(responseLib.generate(true,500,'some error while loading friends',null));    
}
else if(result==null||result==''||result==undefined){
   res.send(responseLib.generate(true,500,'you have no friends please make some',null));
}
else{
   res.send(responseLib.generate(false,200,'loading friends',result));
}
   });
}

let sendFriendRequest=(req,res)=>{
    friendmodel.findOne({userId:req.user.userId,requestedPersonID:req.body.requestedPersonID}).exec((err,result)=>{
        if(err)
        {
            console.log('some error occured');
            res.send(responseLib.generate(true,500,'some error occured while friend request',null));
        }
        else if(result==''|result==undefined||result==null)
        {
        friendmodeldata=new friendmodel({
            userId:req.user.userId,
            requestedPersonID:req.body.requestedPersonID,
            requestedPersonName:req.body.requestedPersonName,
            requestSent:true
        });
        friendmodeldata.save((err,result)=>{
            if(err)
            {
                console.log(err.message);
                console.log('some error occured');
                res.send(responseLib.generate(true,500,'some error occured while saving friend request',null));
            }
            else{
                let o=result.toObject();
                delete o._id;
                delete o.__v;
                res.send(responseLib.generate(false,200,'friend request sent successfully',o));
            }
        });
        }
        else if(result.requestaccepted==true)
        {
            res.send(responseLib.generate(true,500,'you both are already a friend',null));
        }
        else if(result.requestSent==false){
            result.requestSent=true;
            result.save((err,result)=>{
                if(err)
                {
                    console.log('some error occured');
                    res.send(responseLib.generate(true,500,'some error occured while saving friend request',null));
                }
                else
                {
                    res.send(responseLib.generate(false,200,'friend request sent successfully',result));
                }
            });
        }
        else if(result.requestSent==true)
        {
            res.send(responseLib.generate(true,500,'request already sent',null));
        }
    });
}
let showFriendRequest=(req,res)=>{
    friendmodel.find({requestedPersonID:req.user.userId,requestSent:true,requestaccepted:false}).select('-_id -__v').exec((err,result)=>{
    if(err)
    {
        console.log('some error occured while showing friend requests');
        res.send(responseLib.generate(true,500,'some error occured while showing friend requests',null));
    }
    else if(result==null||result==undefined||result==''){
        res.send(responseLib.generate(true,404,'no friend requests to show',null));
    }
    else{
        res.send(responseLib.generate(false,200,'loading friend requests',result));
    }
    });
}

let cancelsentrequest=(req,res)=>{
    friendmodel.findOne({userId:req.user.userId,requestedPersonID:req.body.requestedPersonID,requestSent:true,requestaccepted:false}).exec(
        (err,result)=>{
            if(err)
            {
                console.log('some error occured while cancelling friend request');
                res.send(responseLib.generate(true,500,'some error occured while cancelling friend request',null));
            }
            else if(result==null||result==undefined||result==''){
                res.send(responseLib.generate(true,500,'no friend requests to cancel',null));
            }
            else{
                result.requestSent=false;
                result.save((err,result)=>{
                    if(err)
                    {
                        console.log(err.message);
                        console.log('some error occured');
                        res.send(responseLib.generate(true,500,'some error occured while cancelling friend request',null));
                    }
                    else{
                        let o=result.toObject();
                        delete o._id;
                        delete o.__v;
                        res.send(responseLib.generate(false,200,'friend request cancelled successfully',o));
                    }
                });
            }
        });
}
let acceptrequest=(req,res)=>{
    friendmodel.findOne({userId:req.body.requestedPersonID,requestedPersonID:req.user.userId,requestSent:true,requestaccepted:false}).exec(
        (err,result)=>{
            if(err)
            {
                console.log('some error occured while accepting friend request');
                res.send(responseLib.generate(true,500,'some error occured while accepting friend request',null));
            }
            else if(result==null||result==undefined||result==''){
                res.send(responseLib.generate(true,500,'no friend request to accept',null));
            }
            else if(result.requestaccepted==true){
                res.send(responseLib.generate(true,500,'request already accepted',null));
            }
            else{
                result.requestaccepted=true;
                result.save((err,result)=>{
                    if(err)
                    {
                        console.log(err.message);
                        console.log('some error occured');
                        res.send(responseLib.generate(true,500,'some error occured while accepting friend request',null));
                    }
                    else{
                        let o=result.toObject();
                        delete o._id;
                        delete o.__v;
                        res.send(responseLib.generate(false,200,'friend request accepted successfully',o));
                    }
                });
            }
        });
}
let unfriend=(req,res)=>{
    let o={
        usertounfriendid:req.body.requestedPersonID
    }
    friendmodel.find({ $or:[ {requestedPersonID:req.user.userId,userId:o.usertounfriendid,requestaccepted:true}, {requestedPersonID:o.usertounfriendid,userId:req.user.userId,requestaccepted:true} ] }).exec((err,result)=>{
        if(err){console.log('some error while loading friends to unfriend');
        console.log(err.message);
        res.send(responseLib.generate(true,500,'some error while loading friends to unfriend',null));    
     }
     else if(result==null||result==''||result==undefined){
        res.send(responseLib.generate(true,404,'id not found to unfriend',null));
     }
     else{
         let idtodelete=result[0]._id;
         friendmodel.deleteOne({_id:idtodelete},(err,result)=>{
          if(err){console.log('error while unfriend');console.log(err.message);}
          else{res.send(responseLib.generate(false,200,'unfriend success',null));}
         });
     }
        });
}
module.exports={
    showUsers:showUsers,//to give all the users
    sendFriendRequest:sendFriendRequest,// to send a friend request by the person whose token is used to any registered user
    showfriends:showfriends,//to give all the friends of the user whose token is used
    showFriendRequest:showFriendRequest,// to show all friend requests whose token is used
    cancelsentrequest:cancelsentrequest,//to cancel the sent friend request
    showrequestsentstatus:showrequestsentstatus,//to give sent requests statuses
    acceptrequest:acceptrequest,//to accept the friend request
    unfriend:unfriend//to unfriend a friend
}