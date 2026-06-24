const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require( './routers/auth');
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
    console.log(err);
})



app.use('/api/auth', authRouter);



app.listen(5000, () => {
    console.log('Server is running on port 5000');
})