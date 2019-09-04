const bcrypt = require('bcrypt');
const saltRounds = 10;


let generateHash=(myPlaintextPassword)=>{
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);
    return hash;
}
let compareHash=(myPlaintextPassword,hash,cb)=>{
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    if(res)
    {
        cb(null,true);
    }
    else{
        console.log('error comparing passwords');
        cb(err,null);
    } 
});
}

module.exports={
    generateHash:generateHash,
    compareHash:compareHash
}
