import React, { useState } from 'react';

const CreateReminder = ({ match }) => {
  // Extracting the patient ID from the URL params
  const patientId = match.params.id;

  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
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
    // Implement create reminder logic here (static version)
    console.log('Create Reminder submitted:', formData);
    // For demonstration purposes, you can update the UI or perform other client-side actions
    // You may want to make an API call to your backend here to create the new reminder
  };

  return (
    <div>
      <h2>Create New Reminder</h2>
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

        <button type="submit">Create Reminder</button>
      </form>
    </div>
  );
};

export default CreateReminder;
