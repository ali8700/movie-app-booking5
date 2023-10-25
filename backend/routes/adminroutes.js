const express = require('express');
const adminRouter=express.Router();
const { addAdmin ,adminLogin,getAdmins,getAdminById} = require('../controllers/admincontroller');

adminRouter.post('/singup',addAdmin);
adminRouter.post('/login',adminLogin);
adminRouter.get('/', getAdmins);
adminRouter.get('/:id',getAdminById);

module.exports= adminRouter;