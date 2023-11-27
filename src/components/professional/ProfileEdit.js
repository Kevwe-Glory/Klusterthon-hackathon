import React from 'react';

const ProfileEdit = ({ handleAddCertification, handleDeleteCertification, handleDeleteAccount }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      {/* Buttons for adding/deleting certifications */}
      <div className="mb-4">
        <button
          onClick={handleAddCertification}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
        >
          Add Certification
        </button>
        <button
          onClick={handleDeleteCertification}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Delete Certification
        </button>
      </div>

      {/* Button to delete the account */}
      <button
        onClick={handleDeleteAccount}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
      >
        Delete Account
      </button>
    </div>
  );
};

export default ProfileEdit;
