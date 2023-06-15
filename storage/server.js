// Importing required modules
require('dotenv').config(); // Loads environment variables from a .env file
const express = require('express'); // Importing the Express framework
const app = express(); // Creating an instance of the Express application
const path = require('path'); // Provides utilities for working with file and directory paths
const multer = require('multer'); // Middleware for handling file uploads
const cors = require('cors');


app.use(cors({
    "origin": '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 202
}))

// Configuring storage for public files
const publicStorage = multer({
    storage: multer.diskStorage({
        destination: __dirname + '/public', // Specifies the destination directory for uploaded files
        filename: (req, file, cb) => {
            // Generates a unique filename for the uploaded file
            const fileExtension = path.extname(file.originalname);
            const newFileName = `${file.fieldname}-${Date.now()}${fileExtension}`;
            cb(null, newFileName);
        }
    })
});

// Configuring storage for local files
const localStorage = multer({
    storage: multer.diskStorage({
        destination: __dirname + '/local', // Specifies the destination directory for uploaded files
        filename: (req, file, cb) => {
            // Generates a unique filename for the uploaded file
            const fileExtension = path.extname(file.originalname);
            const newFileName = `${file.fieldname}-${Date.now()}${fileExtension}`;
            cb(null, newFileName);
        }
    })
});

// Serving static files from the 'public' directory
app.use('/public', express.static(__dirname + '/public'));

// Handling POST requests to '/public' endpoint
app.post('/public', publicStorage.single('file'), (req, res) => {
    // Accessing the uploaded file with `req.file`
    const file = req.file;
    // Use the file information as needed (e.g., save it to a database, perform some operations, etc.)
    res.json({ path: `${__dirname}/public/${file.filename}`, name: file.filename }); // Responding with the path to the uploaded file
});

// Middleware for checking authorization key
app.use('/', (req, res, next) => {
    if (req.headers.key == process.env.KEY) { // Comparing the provided key with the one stored in the environment variables
        next(); // Allowing the request to proceed to the next middleware or route handler
    } else {
        res.status(401).send('Unauthorized!'); // Sending a response indicating unauthorized access
    }
});

// Serving static files from the 'local' directory
app.use('/', express.static(__dirname + '/local'));

// Handling POST requests to the root endpoint
app.post('/', localStorage.single('file'), (req, res) => {
    // Accessing the uploaded file with `req.file`
    const file = req.file;
    // Use the file information as needed (e.g., save it to a database, perform some operations, etc.)
    res.json({ path: `${__dirname}/local/${file.filename}`, name: file.filename }); // Responding with the path to the uploaded file
});

// Starting the server
app.listen(process.env.PORT, () => {
    console.log("Server running on http://localhost:" + process.env.PORT);
});