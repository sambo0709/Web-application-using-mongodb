Event Registration Web Application - MongoDb

**Course:** CSS 305 – Web Application Development  

**Student:** Samuel Boye  

**Date:** November 12, 2025  

---

## 📘 Overview
This project is a simple Node.js and Express web application that allows users to register for an event.  
All registration data (name, email, and event) is stored in a MongoDB database using Mongoose.  
The app demonstrates server-side form handling, modular project structure, and basic CRUD operations.

---

## 🧩 Features
- HTML form for user registration  
- Data stored in MongoDB via Mongoose  
- Dynamic page to view all registered participants  
- Modular project structure  
- Server-side validation using a Mongoose schema  

---

## 🗂 Project Structure

Assignment4-Web-Application/
├── db.js # Handles MongoDB connection

├── server.js # Main Express server file

├── models/
│ └── registrant.js # Mongoose schema/model for registrants

├── public/
│ ├── index.html # Event registration form
│ └── styles.css # Styling for the form and layout

├── package.json # Dependencies and scripts

└── README.md # Documentation

