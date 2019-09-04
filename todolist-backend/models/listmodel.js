let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let listModel=new Schema(
    {
        userId:{type:String},//user id of which this list belongs to
        doneById:{type:String},//user id of the person who created this or deleted this or updated this
        doerFullName:{type:String},// username of the person who did this
        itemName:{type:String},//name of item
        itemStatus:{type:String,default:'check_box_outline_blank'},//status of item
        itemId:{type:String,unique:true},//node id
        parentId:{type:String},//parent node id
        creationDate:{type:Date,default:Date.now},//time of creating this node
        status:{type:Boolean,default:true}//true means item is present and false means item is deleted
    }
);
mongoose.model('listModel',listModel);