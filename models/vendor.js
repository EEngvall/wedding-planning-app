// models/vendor.js

const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  price: {
    type: String,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
