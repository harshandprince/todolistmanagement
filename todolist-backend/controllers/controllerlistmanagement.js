let express=require('express');
let mongoose=require('mongoose');
let shortid=require('shortid');
let schema=require('./../models/signupmodel');
let auth=require('./../models/authModel');
let list=require('./../models/listmodel');
let trlog=require('./../models/transactionLogLib');
let transactionlogmodel=mongoose.model('transactionlogmodel');
let listmodel=mongoose.model('listModel');
let signupmodel=mongoose.model('signupModel');
let authModel=mongoose.model('authModel');
let responseLib=require('./../library/responseLib');

let createNode=(req,res)=>//function to create listitem
{
    let uid;
    if(req.body.userId==undefined||req.body.userId==null||req.body.userId==''){
        this.uid=req.user.userId;
    }
    else{
        this.uid=req.body.userId;
    }
    console.log(uid);
   listmodelData=new listmodel({
    userId:this.uid,
    parentId:req.body.parentId,
    itemName:req.body.itemName,
    doneById:req.user.userId,
    doerFullName:req.user.fullName,
    itemId:shortid.generate()
   });
   listmodelData.save((err,result)=>{
       if(err)
       {
          console.log('error creating node');
          console.log(err.message);
          res.send(responseLib.generate(true,500,'error occured while creating node',null));
       }
       else{
           let o=result.toObject();
           delete o._id;
           delete o.__v;
          res.send(responseLib.generate(false,200,'item created successfully',o));
          let transactionlogmodeldata=new transactionlogmodel({
            actionId:shortid.generate(),
            itemId:o.itemId,
            operationName:'create',
            usedId:this.uid,
            doneById:req.user.userId
          });
          transactionlogmodeldata.save((err,result)=>{
              if(err){console.log('transaction log error while creating');}
              else{console.log('transaction create logged success');}
          });
       }
   });
}
let showList=(req,res)=>
{
    let uid;
    if(req.body.userId==undefined||req.body.userId==null||req.body.userId==''){
        this.uid=req.user.userId;
    }
    else{
        this.uid=req.body.userId;
    }
  let data={
      userId:this.uid,
      parentId:req.body.parentId
  }
  console.log(data);
  listmodel.find({userId:data.userId,parentId:data.parentId,status:true}).select('-_id -__v').exec((err,result)=>{
    if(err){
        console.log('error retrieving list');
        res.send(responseLib.generate(true,500,'error retrieving list',null));
    }
    else{
        if(result==''||result==null||result==undefined)
        {
            res.send(responseLib.generate(false,404,'no list items create one',null));
        }
        else{
        res.send(responseLib.generate(false,200,'list found',result));
        }
   }
  });
}
updateNode=(req,res)=>{
    let uid;
    if(req.body.userId==undefined||req.body.userId==null||req.body.userId==''){
        this.uid=req.user.userId;
    }
    else{
        this.uid=req.body.userId;
    }
    listmodel.findOne({itemId:req.body.itemId}).exec((err,result)=>{
        if(err){console.log('some error occured while finding a document to update');
        res.send(responseLib.generate(true,500,'some error occured while finding a document to update',null));}
        else{if(result==null||result==''||result==undefined){
            flag=false;
            res.send(responseLib.generate(true,404,'item not found to update',null));
           }
            else{
                console.log('item found to update');
                   result.itemName=req.body.itemName;
                   result.save((err,result)=>{
                       if(err){console.log('some error occured while deleting the item');}
                       else{
                           let o=result.toObject();
                           delete o._id;
                           delete o.__v;
                       res.send(responseLib.generate(false,200,'item updated successfully',o));
                       let transactionlogmodeldata=new transactionlogmodel({
                        actionId:shortid.generate(),
                        itemId:req.body.itemId,
                        operationName:'update',
                        usedId:this.uid,
                        doneById:req.user.userId,
                        oldData:req.body.oldData,
                        newData:req.body.itemName
                      });
                      transactionlogmodeldata.save((err,result)=>{
                          if(err){console.log('transaction log error while update');}
                          else{console.log('transaction update logged success');}
                      });
                   }
                   }); 
            }
           }
       });
}
deleteNode=(req,res)=>{
    let uid;
    if(req.body.userId==undefined||req.body.userId==null||req.body.userId==''){
        this.uid=req.user.userId;
    }
    else{
        this.uid=req.body.userId;
    }
    listmodel.findOne({itemId:req.body.itemId}).exec((err,result)=>{
     if(err){console.log('some error occured while finding a document to delete');}
     else{if(result==null||result==''||result==undefined){
         res.send(responseLib.generate(true,404,'item not found to delete',null));
        }
         else{
             console.log('item found to delete');
             result.status=false;
                result.save((err,result)=>{
                    if(err){console.log('some error occured while deleting the item');}
                    else{
                        let transactionlogmodeldata=new transactionlogmodel({
                            actionId:shortid.generate(),
                            itemId:req.body.itemId,
                            operationName:'delete',
                            usedId:this.uid,
                            doneById:req.user.userId
                          });
                          transactionlogmodeldata.save((err,result)=>{
                              if(err){console.log('transaction log error while deleting');}
                              else{console.log('transaction delete logged success');}
                          });
                          let o=result.toObject();
                          delete o._id;
                          delete o.__v;
                    res.send(responseLib.generate(false,200,'item deleted successfully',o));
                }
                }); 
         }
        }
    });
    // let f;
    // listmodel.find((err,result)=>{
    //     if(err)
    //     {
    //         console.log('error occured'+err.message);
    //         res.send(responseLib.generate(true,500,'error',null));
    //     }
    //     else if(result==null||result==''||result==undefined)
    //     {
    //         res.send(responseLib.generate(true,404,'item not found',null));
    //     }
    //     else{
    //         for(let pid of result)
    //         {
    //             f=false;
    //             for(let p in result)
    //             {
    //                if(pid.itemId==p.parentId||pid.parentId=='root')
    //                {
    //                   f=true;    
    //                }
    //             }
    //             if(f==false)
    //             {
    //                 listmodel.deleteOne({itemId:pid.itemId},(err,result)=>{
    //                     if(err){console.log('some error occured while deleting the item');}
    //                     else{
    //                     console.log('inside item deleted');
    //                 }
    //                 }); 
    //             }
    //         }
    //     }
    // });
}
changeStatus=(req,res)=>
{
    let uid;
    if(req.body.userId==undefined||req.body.userId==null||req.body.userId==''){
        this.uid=req.user.userId;
    }
    else{
        this.uid=req.body.userId;
    }
listmodel.findOne({itemId:req.body.itemId}).exec((err,result)=>{
    if(err){console.log('some error occured while finding a document to change status');
    res.send(responseLib.generate(true,500,'some error occured while finding a document to change status',null));}
    else{if(result==null||result==''||result==undefined){
        res.send(responseLib.generate(true,404,'item not found to change status',null));
       }
        else{
            console.log('item found to change status');
               result.itemStatus=req.body.itemStatus;
               result.save((err,result)=>{
                   if(err){console.log('some error occured while changing status');}
                   else{
                       let o=result.toObject();
                       delete o._id;
                       delete o.__v;
                   res.send(responseLib.generate(false,200,'item status changed successfully',o));
                   let transactionlogmodeldata=new transactionlogmodel({
                    actionId:shortid.generate(),
                    itemId:req.body.itemId,
                    operationName:'changestatus',
                    usedId:this.uid,
                    doneById:req.user.userId,
                    oldData:req.body.oldStatus,
                    newData:req.body.itemStatus
                  });
                  transactionlogmodeldata.save((err,result)=>{
                      if(err){console.log('transaction log error while changestatus');}
                      else{console.log('transaction changestatus logged success');}
                  });
               }
               }); 
        }
       }
   });
}
let undo=(req,res)=>{
    let uid;
    if(req.body.userId==undefined||req.body.userId==null||req.body.userId==''){
        this.uid=req.user.userId;
    }
    else{
        this.uid=req.body.userId;
    }
    transactionlogmodel.find({usedId:this.uid}).sort([['operationDate', -1]]).limit(1).select('-_id -__v').exec((err,result)=>{
    if(err){console.log('some error while loading undo transactions');console.log(err.message);
    res.send(responseLib.generate(true,500,'some error while loading undo transactions',null));}
    else if(result==''||result==undefined||result==null){
        res.send(responseLib.generate(true,404,'no log history found to undo further',null));
    }
    else{
        let doc=result[0];
        if(doc.operationName=='create')
        {
            listmodel.findOne({itemId:doc.itemId},(err,result)=>{
                result.status=false;
                result.save((err,result)=>{
                    if(err){console.log('error while create in undo');console.log(err.message)}
                    else{
                        transactionlogmodel.deleteOne({actionId:doc.actionId},(err,result)=>{
                            if(err){console.log('error while create in undo and deleting transaction detail');console.log(err.message)}
                            else{res.send(responseLib.generate(false,200,'undo success',null));}
                        });
                    }
                });
            });
           //console.log('create');
        }
        else if(doc.operationName=='update')
        {
            listmodel.findOne({itemId:doc.itemId},(err,result)=>{
                result.itemName=doc.oldData;
                result.save((err,result)=>{
                    if(err){console.log('error while update in undo');console.log(err.message)}
                    else{
                        transactionlogmodel.deleteOne({actionId:doc.actionId},(err,result)=>{
                            if(err){console.log('error while update in undo and deleting transaction detail');console.log(err.message)}
                            else{res.send(responseLib.generate(false,200,'undo success',null));}
                        });
                    }
                });
            });
            //console.log('update');
        }
        else if(doc.operationName=='delete')
        {
            listmodel.findOne({itemId:doc.itemId},(err,result)=>{
                result.status=true;
                result.save((err,result)=>{
                    if(err){console.log('error while delete in undo');console.log(err.message)}
                    else{
                        transactionlogmodel.deleteOne({actionId:doc.actionId},(err,result)=>{
                            if(err){console.log('error while delete in undo and deleting transaction detail');console.log(err.message)}
                            else{res.send(responseLib.generate(false,200,'undo success',null));}
                        });
                    }
                });
            });
            //console.log('delete');
        }
        else if(doc.operationName=='changestatus')
        {
            listmodel.findOne({itemId:doc.itemId},(err,result)=>{
                result.itemStatus=doc.oldData;
                result.save((err,result)=>{
                    if(err){console.log('error while changestatus in undo');console.log(err.message)}
                    else{
                        transactionlogmodel.deleteOne({actionId:doc.actionId},(err,result)=>{
                            if(err){console.log('error while changestatus in undo and deleting transaction detail');console.log(err.message)}
                            else{res.send(responseLib.generate(false,200,'undo success',null));}
                        });
                    }
                });
            });
            //console.log('changestatus');
        }
    }
    });
}
module.exports={
    createNode:createNode,// to create a list
    showList:showList,//to show all the lists and list items
    updateNode:updateNode,//to update the item
    deleteNode:deleteNode,//to delete an item
    changeStatus:changeStatus,//to change status of item
    undo:undo
}