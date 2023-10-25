const express=require('express');
const app=express();
const cors =require('cors')
const dotenv=require('dotenv');
dotenv.config();
const port= process.env.PORT||5010
const connecdb=require('./config/db')
const userRouter=require ('./routes/userroutes')
const userAdmin=require('./routes/adminroutes');
const movieRouter =require('./routes/movieroutes');
const bookingsRouter=require('./routes/bookingroutes');
connecdb()
//middlewars
app.use(express.json())
app.use(cors());
app.use('/user',userRouter);
app.use('/admin',userAdmin);
app.use('/movie',movieRouter);
app.use('/booking', bookingsRouter);


app.listen(5010,(err)=>{
    err?console.log(err):console.log('go to the port=>${port}')
    })
    