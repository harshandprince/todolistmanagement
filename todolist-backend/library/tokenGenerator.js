let jwt=require('jsonwebtoken');
let shortid=require('shortid');
let secret="someRandomSecretKeyToEncryptPassword";
let generateToken=(data,cb)=>{
try{
let claims={
    jwtid:shortid.generate(),
    iat:Date.now(),
    exp:Math.floor(Date.now()/1000)+(60*60*24),
    sub:'authToken',
    iss:'todolist',
    data:data
}
let tokenDetails={
    "token":jwt.sign(claims,secret),
    "secret":secret
}
cb(null,tokenDetails);
}
catch(err){
    console.log('error while creating token');
    cb(err,null);
}
};
let verifyToken=(authToken,cb)=>{
    jwt.verify(authToken,'someRandomSecretKeyToEncryptPassword',(err,decoded)=>{
     if(err){
     console.log('error while verifying token');
     console.log(err);
     cb(err,null);
     }
     else{
         console.log('user verified');
     cb(null,decoded);
     }
    });
}
module.exports={
    generateToken:generateToken,
    verifyToken:verifyToken
}