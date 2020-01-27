import express from "express";

// initialize the express app
const app = express();

// use APIs here (controllers)
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'Server is running!'
    });
});

// start server on port 8080
app.listen(8080, () => {
    console.log('Server running on port 8080.');
});