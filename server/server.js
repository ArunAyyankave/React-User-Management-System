require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const adminRouter = require('./Routes/adminRouter');
const userRouter= require('./Routes/userRouter');

app.use(express.json());
app.use('/', userRouter);
app.use('/admin', adminRouter);

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT, ()=>{
    console.log('server is running...');
})
