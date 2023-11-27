import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DrLogin } from '../../asset/image';

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
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



  const handleSubmit = async ({ email, password }) => {
    console.log('cool')
    setLoading(true);
    try {
      const result = await fetch(
        "https://klusterthon-hackathon.onrender.com" + "/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            Accepts: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      ).then((r) => r.json());

      if (result.code !== 200) {
        // alert(result.message)

        return;
      }
      if (result) {
        await window.localStorage.setItem(
          "token",
          JSON.stringify(result.data.accessToken)
        );
        console.log(result)
      }

    } catch (error) {
      // alert(error.message)
      console.log(error)
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* First child div with centered image and black background */}
      <div className="md:w-1/3 bg-[#224AA0] flex justify-center items-center h-full mb-8">
        <img src={DrLogin} alt="Login" className="w-2/3 h-auto" />
      </div>

      {/* Second child div with login form */}
      <div className="flex flex-col justify-center items-center m-4 md:p-10 py-8 my-8 md:mt-0 md:ml-4 w-full md:w-2/3">
        <div className='bg-gray-200 rounded-lg p-6 md:p-9 w-full md:w-4/6 h-auto'>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#224AA0]">Welcome back Doctor!</h2>
          <p className='text-[#224AA0] pb-2 md:pb-5'>Log in to your account</p>
          <form onSubmit={()=>handleSubmit(formData)} className="space-y-4 w-full max-w-md">
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

            {/* Password requirements text */}
            <p className="text-xs text-gray-700">
              Password must be a minimum of 8 characters and must contain a capital letter, a small letter, a number, and a special character.
            </p>

            <button onClick={handleSubmit} className="bg-[#224AA0] text-white py-2 px-4 rounded-md w-full">
              {/* <Link to="/professional/dashboard">Log In</Link> */}
              <div>Log In</div>
            </button>
            
            <p className="text-gray-700 text-sm mt-2 text-center">
              Don't have an account yet?{' '}
              <Link to="/professional/register" className='text-[#224AA0] font-semibold'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
