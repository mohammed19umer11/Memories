import memoryModel from '../models/memories.js';
import mongoose from 'mongoose';

export const getMemories = async (req,res)=>{
    try {
        const memory = await memoryModel.find();
        return res.status(200).json(memory);
    } catch (error) {
        return res.status(404).json({
            message:error.message
        });
    }
};


export const createMemories = async (req,res)=>{
    const memory = new memoryModel(req.body);
    try {
        await memory.save();
        return res.status(201).json(memory);
    } catch (error) {
        return res.status(409).json({
            message:error.message
        });
    }
};

export const updateMemories = async (req,res)=>{
    const {id} = req.params;
    const memory = req.body;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No memory exist with that id')
        const updatedMemory = await memoryModel.findByIdAndUpdate(id,{...memory,_id:id},{new:true});
        res.status(200).json(updatedMemory);

    } catch (error) {
        return res.status(404).json({
            message:error.message
        });
    }
};

export const deleteMemories = async (req,res)=>{
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No memory exist with that id')
        await memoryModel.findByIdAndRemove(id);
        console.log('DELETED')
        res.status(200).json('Deleted');

    } catch (error) {
        return res.status(404).json({
            message:error.message
        });
    }
};