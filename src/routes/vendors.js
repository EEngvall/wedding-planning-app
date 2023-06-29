// vendors.js

const express = require("express");
const router = express.Router();

// Import the Vendor model

// ... previous code ...

// GET route for retrieving all vendors
router.get("/", (req, res) => {
  Vendor.find({}, (err, vendors) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching vendors.");
    } else {
      // Create a response object with a message and the retrieved vendors
      const response = {
        message: "Vendors retrieved successfully.",
        vendors: vendors,
      };
      res.json(response);
    }
  });
});

// ... remaining code ...

module.exports = router;
