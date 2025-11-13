/*
  I certify that this JavaScript file is all my own work.
  Signed: Samuel Boye
  Date: 11/11/2025
  Class: CSS 305
  File: registrant.js
  Assignment: 4
  Description: Defines the Mongoose schema and model for event registrants.
*/


// Import the Mongoose library
const mongoose = require('mongoose');

const registrantSchema = new mongoose.Schema({

  // The registrant's full name — required and trimmed to remove extra spaces
  name:  { 
    type: String, 
    required: true, 
    trim: true 
  },

  // The registrant's email address — required and trimmed
  email: { 
    type: String, 
    required: true, 
    trim: true 
  },

  // The name of the event the person is registering for — required and trimmed
  event: { 
    type: String, 
    required: true, 
    trim: true 
  }

}, 
// timestamps added to automatically record "createdAt" and "updatedAt" fields to show when it was created and updated
{ timestamps: true }
);


// This allows the other files to interact with the "registrants" collection
module.exports = mongoose.model('Registrant', registrantSchema);
