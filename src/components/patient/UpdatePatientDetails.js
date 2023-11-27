// Form to update patient details.
import React, { useState, useEffect } from 'react';

const UpdatePatientDetails = ({ match }) => {
  // Extracting the patient ID from the URL params
  const patientId = match.params.id;

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields as needed
  });

  // Fetch existing patient details from the backend
  useEffect(() => {
    // Example: Fetching patient details from an API
    // Replace the URL with your actual API endpoint
    fetch(`https://your-api-url/patients/${patientId}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching patient details:', error));
  }, [patientId]); // The dependency array ensures the effect runs whenever patientId changes

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement update patient details logic here
    console.log('Update Patient Details submitted:', formData);
    // You may want to make an API call to your backend here to update patient details
  };

  return (
    <div>
      <h2>Update Patient Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Add more fields as needed */}

        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default UpdatePatientDetails;
