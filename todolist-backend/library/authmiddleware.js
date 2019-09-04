let jwt=require('./../library/tokenGenerator');
let responseLib=require('./../library/responseLib');
let authMiddleware=(req,res,next)=>{
if(req.query.authToken==null||req.query.authToken==''||req.query.authToken==undefined)
{
   res.send(responseLib.generate(true,404,"auth token not found",null));
}
else{
    jwt.verifyToken(req.query.authToken,(err,result)=>{
     if(err)
     {
       res.send(responseLib.generate(true,404,"invalid auth token",null));
     }
     else
     {
         console.log('token verified');
         let o={
             userId:result.data.userId,
             fullName:result.data.firstName+" "+result.data.lastName
         }
         req.user=o;
         next();
     }
    })
}
}
module.exports={
    authMiddleware:authMiddleware
}