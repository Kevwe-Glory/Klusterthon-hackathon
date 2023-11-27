// Component to acknowledge that a medication has been taken.
import React, { useState } from 'react';

const MedicationAcknowledgment = ({ match }) => {
  // Extracting the patient ID and medication ID from the URL params
  const patientId = match.params.patientId;
  const medicationId = match.params.medicationId;

  // State to track acknowledgment status
  const [acknowledged, setAcknowledged] = useState(false);

  // Handle medication acknowledgment
  const handleAcknowledge = () => {
    // Example: Implement acknowledgment logic (API call, state update, etc.)
    // Replace the URL with your actual API endpoint
    // This is a placeholder example, update it based on your backend logic
    fetch(`https://your-api-url/patients/${patientId}/medications/${medicationId}/acknowledge`, {
      method: 'POST',
    })
      .then(() => setAcknowledged(true))
      .catch((error) => console.error('Error acknowledging medication:', error));
  };

  return (
    <div>
      <h2>Medication Acknowledgment</h2>
      {acknowledged ? (
        <p>Medication has been acknowledged.</p>
      ) : (
        <div>
          <p>Did you take your medication?</p>
          <button onClick={handleAcknowledge}>Acknowledge Medication</button>
        </div>
      )}
    </div>
  );
};

export default MedicationAcknowledgment;
