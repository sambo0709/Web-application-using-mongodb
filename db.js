/*
  I certify that this JavaScript file is all my own work.
  Signed: Samuel Boye
  Date: 11/11/2025
  Class: CSS 305
  File: db.js
  Assignment: 4
  Description: Establishes and manages the MongoDB connection using Mongoose.
*/

const mongoose = require('mongoose'); // Import Mongoose library

let isConnected = false; // Track connection status

// Connect to MongoDB using Mongoose
async function connectToDb() {
  
  if (isConnected) return mongoose.connection;

  // Database connection string
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/eventDB';

  // Connect to MongoDB
  await mongoose.connect(uri, { autoIndex: true });
  isConnected = true;
  console.log('Connected to MongoDB');

 
  return mongoose.connection;
}

// Return the current MongoDB connection instance
function getDb() {
  if (!isConnected) console.warn('DB not connected. Call connectToDb() first.');
  return mongoose.connection;
}

// Export both functions for use in server.js
module.exports = { connectToDb, getDb };
