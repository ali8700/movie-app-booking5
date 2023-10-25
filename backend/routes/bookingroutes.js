const express = require('express');
const bookingsRouter = express.Router();
const { newBooking,getBookingById,deleteBooking} = require('../controllers/bookingcontroller');

bookingsRouter.get('/:id',getBookingById);
bookingsRouter.post('/',newBooking);
bookingsRouter.delete('/:id',deleteBooking);

module.exports= bookingsRouter;