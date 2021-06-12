import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

import memories_routes from './routes/memories.js';

dotenv.config();
app.use(express.json({limit: "30mb",extended: true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/memories',memories_routes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
