/*
  I certify that this JavaScript file is all my own work.
  None is copied from any person. I used W3Schools and GeeksforGeeks as references.

  Signed: Samuel Boye
  Date: 11/12/2025
  Class: CSS 305
  File: server.js
  Assignment: Assignment 4
  Description: Main server file for handling event registrants.
*/

const express = require('express');
const path = require('path');
const { connectToDb, getDb } = require('./db');
const Registrant = require('./models/registrant');

const app = express();
let database; // holds the Mongoose connection reference

// Middleware for form data and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Function to start the server after database connection
async function startServer() {
  try {
    // Connect to MongoDB
    await connectToDb();
    database = getDb();
    console.log('Database connected successfully');

    // Define routes only after the DB connection is established

    // POST /register → save a new registrant
    app.post('/register', async (req, res) => {
      await Registrant.create(req.body);
      res.redirect('/registrants');
    });

    // GET /registrants → show all registrants
    app.get('/registrants', async (_req, res) => {
      const people = await Registrant.find().sort({ createdAt: -1 }).lean();
      res.send(people); // Can later be formatted into HTML
    });

    // Start the server
    const port = 3000;
    app.listen(port, () =>
      console.log(`App is listening on http://localhost:${port}`)
    );

  } catch (err) {
    console.error('Error starting server:', err.message);
  }
}

// Run the application
startServer();
