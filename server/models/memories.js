import mongoose from 'mongoose';

const memorySchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String, 
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const memoryModel = mongoose.model('MemoryModel',memorySchema);
export default memoryModel;