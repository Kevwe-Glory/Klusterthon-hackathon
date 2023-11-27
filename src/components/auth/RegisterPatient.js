import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    console.log('Registration submitted:', formData);
    // You may want to make an API call to your backend here
    await fetch('https://klusterthon-hackathon.onrender.com/api/v1/auth/register-patient', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'the dddd')
        // setPosts((posts) => [data, ...posts]);
        // setTitle('');
        // setBody('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto max-w-md p-9 m-12">
      <h2 className="text-2xl font-semibold mb-4 text-center pb-9">Create an Account</h2>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit()
      }} className="space-y-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          Full Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="fullName"
          placeholder='Enter Your Full Name'
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter your Email'
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password:
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
        <button type="submit" className="bg-[#224AA0] text-white py-2 px-4 mt-14 rounded-md w-full">
          {/* <Link to="/patient/login"> */}
            Sign Up
            {/* </Link> */}
        </button>

        <p className="text-gray-700 text-sm mt-2 text-center">
          Already have an account? <Link to="/patient/login" className='text-[#224AA0] font-semibold'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPatient;
