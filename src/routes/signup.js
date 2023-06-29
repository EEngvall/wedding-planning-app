const express = require("express");
const router = express.Router();
const Vendor = require("../../models/vendor");

router.post("/", async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json({ message: "Vendor signed up successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while signing up the vendor." });
  }
});

module.exports = router;
