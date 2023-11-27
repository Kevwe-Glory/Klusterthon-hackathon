import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center md:flex-row h-screen">
      <div className="flex flex-col justify-center items-center m-9 md:p-10 py-8 my-8 md:mt-0 md:ml-4 w-full md:w-2/3">
        <h2 className="text-2xl font-semibold md:text-3xl mb-4">Login to your account</h2>
        <div className="rounded-lg p-9 w-4/6 h-5/6">
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            {/* Form fields */}
            {['email', 'password'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-[#333333]">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'password' ? 'password' : 'text'}
                  id={field}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            ))}

            {/* Forgot Password link */}
            <Link to="/patient/password-reset" className="text-[#224AA0] text-sm block text-right mb-4">
              Forgot Password?
            </Link>

            <button type="submit" className="bg-[#224AA0] text-white py-2 px-4 rounded-md w-full">
              <Link to="/patient/login">Log In</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
