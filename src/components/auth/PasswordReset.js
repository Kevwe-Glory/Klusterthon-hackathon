import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSend = () => {
    // You can add your logic here to send the reset email
    // For now, let's simulate email sending by updating state
    setIsEmailSent(true);
  };

  const handleResend = () => {
    // You can add your logic here to resend the reset email
    // For now, let's simulate email resending by updating state
    setIsEmailSent(false);
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-2xl font-semibold mb-7 text-center">Forgot Password</h2>
      <p className='text-center mt-10'>Please enter your Email Address to reset your password.</p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-md">
        {isEmailSent ? (
          <p className="text-green-600 mb-9 text-center">Password reset email sent to {email}.</p>
        ) : (
          <>
            <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
            />
            <button
              type="button"
              onClick={handleSend}
              className="bg-[#224AA0] text-white py-2 px-4 rounded-md mb-4 w-full"
            >
              Continue
            </button>
            <p className="text-gray-700 text-sm mb-4 text-center">
              Didn't receive the email?{' '}
              <button
                type="button"
                onClick={handleResend}
                className="text-[#224AA0] font-semibold"
              >
                Resend Password
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
