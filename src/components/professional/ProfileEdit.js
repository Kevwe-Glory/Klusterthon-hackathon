import React from 'react';

const ProfileEdit = ({ firstName, lastName, mobileNumber }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      {/* Buttons for adding/deleting certifications */}
      <div className="mb-4">
        <button
          onClick={firstName}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
        >
          First Name
        </button>
        <button
          onClick={lastName}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Last Name
        </button>
      </div>

      {/* Button to delete the account */}
      <button
        onClick={mobileNumber}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
      >
        Mobile Number
      </button>
    </div>
  );
};

export default ProfileEdit;
