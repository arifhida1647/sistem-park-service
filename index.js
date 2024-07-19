// Import packages
const express = require("express");
const firebase = require("./routes/firebase");
const bodyParser = require('body-parser');
const cors = require('cors'); // Tambahkan ini

// Middlewares
const app = express();


// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Menggunakan middleware CORS
app.use(cors()); // Tambahkan ini

// Routes
app.use("/", firebase);
// connection
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port ${port} (http://localhost:${port})`));
