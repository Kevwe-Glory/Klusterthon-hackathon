// Display a list of medications for a patient.
import React, { useState, useEffect } from 'react';

const MedicationList = ({ match }) => {
  // Extracting the patient ID from the URL params
  const patientId = match.params.id;

  // State for storing the list of medications
  const [medications, setMedications] = useState([]);

  // Fetch the list of medications for the specific patient from the backend
  useEffect(() => {
    // Example: Fetching medications from an API
    // Replace the URL with your actual API endpoint
    fetch(`https://your-api-url/patients/${patientId}/medications`)
      .then((response) => response.json())
      .then((data) => setMedications(data))
      .catch((error) => console.error('Error fetching medications for the patient:', error));
  }, [patientId]); // The dependency array ensures the effect runs whenever patientId changes

  return (
    <div>
      <h2>List of Medications</h2>
      {medications.length === 0 ? (
        <p>No medications found for this patient.</p>
      ) : (
        <ul>
          {medications.map((medication) => (
            <li key={medication.id}>
              {medication.medicationName} - Dosage: {medication.dosage}, Frequency: {medication.frequency}
              {/* Display more medication information as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicationList;
