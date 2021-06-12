import express from 'express';
//cant do import {Router} from 'express'
// becuse express does not support it (cmmon.js)

const router = express.Router();
import {getMemories, createMemories, updateMemories, deleteMemories} from '../controllers/memories.js';

router.get('/',getMemories);
router.post('/',createMemories);
router.patch('/:id',updateMemories);
router.patch('/:id',deleteMemories);



export default router;

