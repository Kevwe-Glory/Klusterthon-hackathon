// Form to update a reminder.
import React, { useState, useEffect } from 'react';

const UpdateReminder = ({ match }) => {
  // Extracting the patient ID and reminder ID from the URL params
  const patientId = match.params.patientId;
  const reminderId = match.params.reminderId;

  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    // Add more fields as needed
  });

  // Fetch existing reminder details from the backend
  useEffect(() => {
    // Example: Fetching reminder details from an API
    // Replace the URL with your actual API endpoint
    fetch(`https://your-api-url/patients/${patientId}/reminders/${reminderId}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching reminder details:', error));
  }, [patientId, reminderId]); // The dependency array ensures the effect runs whenever patientId or reminderId changes

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
    // Implement update reminder logic here
    console.log('Update Reminder submitted:', formData);
    // You may want to make an API call to your backend here to update the reminder
  };

  return (
    <div>
      <h2>Update Reminder</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        {/* Add more fields as needed */}

        <button type="submit">Update Reminder</button>
      </form>
    </div>
  );
};

export default UpdateReminder;
