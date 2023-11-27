// Form to update details of a patient's medication.
import React, { useState, useEffect } from 'react';

const UpdateMedicationDetails = ({ match }) => {
  // Extracting the patient ID and medication ID from the URL params
  const patientId = match.params.patientId;
  const medicationId = match.params.medicationId;

  // State for form fields
  const [formData, setFormData] = useState({
    medicationName: '',
    dosage: '',
    frequency: '',
    // Add more fields as needed
  });

  // Fetch existing medication details from the backend
  useEffect(() => {
    // Example: Fetching medication details from an API
    // Replace the URL with your actual API endpoint
    fetch(`https://your-api-url/patients/${patientId}/medications/${medicationId}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching medication details:', error));
  }, [patientId, medicationId]); // The dependency array ensures the effect runs whenever patientId or medicationId changes

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
    // Implement update medication details logic here
    console.log('Update Medication Details submitted:', formData);
    // You may want to make an API call to your backend here to update medication details
  };

  return (
    <div>
      <h2>Update Medication Details</h2>
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

        <button type="submit">Update Medication Details</button>
      </form>
    </div>
  );
};

export default UpdateMedicationDetails;
