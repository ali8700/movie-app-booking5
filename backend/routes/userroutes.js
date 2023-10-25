const express = require('express');
const userRouter=express.Router();
const { getAllUsers,singup,updateUser,deleteUser,login,getUserById,getBookingsOfUser} = require('../controllers/usercontroller');


userRouter.get('/',getAllUsers);//localhost:5010/user
userRouter.post('/singup',singup);//localhost:5010/user/singup
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.post('/login',login);
userRouter.get('/:id',getUserById);
userRouter.get('/bookings/:id', getBookingsOfUser);
module.exports = userRouter;





