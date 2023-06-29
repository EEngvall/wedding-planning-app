// server.js
require("dotenv").config();
const Vendor = require("./models/vendor");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Set your desired port number
const cluster = "cluster0.frqsy";
const dbname = "modroots";
const vendorsRouter = require("./src/routes/vendors");
const signupRoute = require("./src/routes/signup");

// Connect to MongoDB
mongoose.connect(
  `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully, listening on port " + PORT);
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/vendors", vendorsRouter);

app.use("/signup", signupRoute);

app.post("/vendors", async (req, res) => {
  try {
    const { vendorName, email, category } = req.body;

    // Create a new instance of the Vendor model with the form data
    const newVendor = new Vendor({
      name: vendorName,
      email,
      category,
    });

    // Save the vendor to the database
    await newVendor.save();

    // Respond with a success message or status code
    res.status(200).json({ message: "Vendor created successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
