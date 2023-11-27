import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement password change logic here
    console.log('Password Change submitted:', formData);

    // Simulate sending a confirmation link (this part is typically done on the server)
    // In a real-world scenario, you would make an API call to your backend to handle email sending.
    try {
      // Simulate an asynchronous operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set state to indicate that confirmation link has been sent
      setConfirmationSent(true);
    } catch (error) {
      console.error('Error sending confirmation link:', error);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Set New Password</h2>
      <p className="text-green-600 mb-4">Please enter  the verification number sent to your Email Address.</p>
      {confirmationSent ? (
        <p className="text-green-600 mb-4">Please enter  the verification number sent to your Email Address.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
            Old Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <button type="submit" className="bg-[#224AA0] text-white py-2 px-4 rounded-md w-full">
              <Link to="/patient-login">Change Password</Link>
            </button>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;
