import React, { useState } from "react";
import axios from "axios";
import "../Styles/vendorSignUpForm.css";

const VendorSignUpForm = () => {
  const [vendorName, setVendorName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

  const handleVendorNameChange = (event) => {
    setVendorName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/vendors", {
        vendorName,
        email,
        category,
      });

      console.log(response.data); // Assuming you want to log the response data
      // Add any additional logic or state updates as needed after successful form submission
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the form submission
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="vendorName">Vendor Name:</label>
          <input
            type="text"
            id="vendorName"
            value={vendorName}
            onChange={handleVendorNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="Photographer">Photographer</option>
            <option value="Caterer">Caterer</option>
            <option value="Venue">Venue</option>
            {/* Add more category options as needed */}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VendorSignUpForm;
