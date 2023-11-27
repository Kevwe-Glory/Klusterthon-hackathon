// // Form to change the user's password
// import React, { useState } from 'react';

// const ChangePassword = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement password change logic here
//     console.log('Password Change submitted:', formData);
//     // You may want to make an API call to your backend here
//   };

//   return (
//     <div>
//       <h2 className=''>Change Password</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="currentPassword">Current Password:</label>
//         <input
//           type="password"
//           id="currentPassword"
//           name="currentPassword"
//           value={formData.currentPassword}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="newPassword">New Password:</label>
//         <input
//           type="password"
//           id="newPassword"
//           name="newPassword"
//           value={formData.newPassword}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="confirmPassword">Confirm New Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Change Password</button>
//       </form>
//     </div>
//   );
// };

// export default ChangePassword;


import React, { useState } from 'react';

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
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      {confirmationSent ? (
        <p className="text-green-600 mb-4">Confirmation link sent to your email. Please check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
            Current Password:
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

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Change Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;
