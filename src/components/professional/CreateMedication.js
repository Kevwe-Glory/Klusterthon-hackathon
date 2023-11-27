// Form to create a new medication for a patient.
import React, { useState } from 'react';

const CreateMedication = ({ match }) => {
  // Extracting the patient ID from the URL params
  const patientId = match.params.id;

  // State for form fields
  const [formData, setFormData] = useState({
    medicationName: '',
    dosage: '',
    frequency: '',
    // Add more fields as needed
  });

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
    // Implement create medication logic here
    console.log('Create Medication submitted:', formData);
    // You may want to make an API call to your backend here to create the new medication
  };

  return (
    <div>
      <h2>Create New Medication</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="medicationName">Medication Name:</label>
        <input
          type="text"
          id="medicationName"
          name="medicationName"
          value={formData.medicationName}
          onChange={handleChange}
          required
        />

        <label htmlFor="dosage">Dosage:</label>
        <input
          type="text"
          id="dosage"
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          required
        />

        <label htmlFor="frequency">Frequency:</label>
        <input
          type="text"
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          required
        />

        {/* Add more fields as needed */}

        <button type="submit">Create Medication</button>
      </form>
    </div>
  );
};

export default CreateMedication;
