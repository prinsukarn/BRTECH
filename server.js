require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoute = require("./route/contactRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", contactRoute);

// Port and Server Setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
