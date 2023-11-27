// Display a list of reminders for a patient.
import React, { useState, useEffect } from 'react';

const ReminderList = ({ match }) => {
  // Extracting the patient ID from the URL params
  const patientId = match.params.id;

  // State for storing the list of reminders
  const [reminders, setReminders] = useState([]);

  // Fetch the list of reminders for the specific patient from the backend
  useEffect(() => {
    // Example: Fetching reminders from an API
    // Replace the URL with your actual API endpoint
    fetch(`https://your-api-url/patients/${patientId}/reminders`)
      .then((response) => response.json())
      .then((data) => setReminders(data))
      .catch((error) =>
        console.error('Error fetching reminders for the patient:', error)
      );
  }, [patientId]); // The dependency array ensures the effect runs whenever patientId changes

  return (
    <div>
      <h2>List of Reminders</h2>
      {reminders.length === 0 ? (
        <p>No reminders found for this patient.</p>
      ) : (
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id}>
              {reminder.title} - {reminder.date} {reminder.time}
              {/* Display more reminder information as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReminderList;