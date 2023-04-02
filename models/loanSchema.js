//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  age: { type: Number, required: true, min: 18, max: 120 },
});

const loanSchema = new Schema({
  customer: { type: authorSchema, required: true },
  amount: { type: Number, required: true, min: 1 },
  Date: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => value <= Date.now(),
      message: 'date must be in the past',
    },
  },
  
  loanType: { type: String, enum: ['CAR', 'HOUSE', 'LIFE'], required: true },
});

const loan = mongoose.model('Loan', loanSchema);

module.exports= loan

