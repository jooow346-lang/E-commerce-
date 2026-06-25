const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require( './routers/auth');
const userRouter = require('./routers/user');

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

app.use('/api/user', userRouter);

app.use('/uploads', express.static('uploads'));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})