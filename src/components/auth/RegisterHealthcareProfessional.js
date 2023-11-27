import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dr } from '../../asset/image';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    // Check if the password meets the requirements
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Provide feedback based on the requirements
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else if (!hasUppercase) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!hasNumber) {
      setPasswordError('Password must contain at least one number');
    } else if (!hasSymbol) {
      setPasswordError('Password must contain at least one symbol');
    } else {
      setPasswordError('');
    }

    // Update the password in the form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      password,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the password meets the requirements before submission
    if (passwordError) {
      console.error('Password does not meet the requirements. Please correct it.');
    } else {
      // Add your signup logic here
      console.log('Signup submitted:', formData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* First child div with centered image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={Dr} alt="Doctor" className="w-2/3 h-auto" />
      </div>

      {/* Second child div with signup form */}
      <div className="flex flex-col items-center bg-gray-200 p-9 mb-9 md:p-10 rounded-md mt-8 md:mt-12">
        <h2 className="text-2xl font-bold md:text-3xl mb-4 text-[#224AA0]">Hello, Doctor!</h2>
        <p className='text-[#224AA0] pb-5'>Fill the form correctly to create an account</p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {['firstName', 'lastName'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-[#333333]">
                  {field === 'firstName' ? 'First Name' : 'Last Name'}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  placeholder={`Enter your ${field.toLowerCase()}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            ))}
          </div>

          {/* Job Title */}
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder='Enter your job title'
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          {/* Email */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email address'
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          {/* Password */}
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={handlePasswordChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <p className="text-xs text-gray-700 mt-1">
            Password must be at least 8 characters and include at least one uppercase letter, one number, and one symbol.
          </p>
          {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}

          {/* Confirm Password */}
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Re-enter your password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          {/* Submit button */}
          <button type="submit" className="bg-[#224AA0] text-white py-2 px-4 rounded-md w-full">
            <Link to="/login">Sign Up</Link>
          </button>

          {/* Login link */}
          <p className="text-gray-700 text-sm mt-2 text-center">
            Already have an account? <Link to="/professional/login" className='text-[#224AA0] font-semibold'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
