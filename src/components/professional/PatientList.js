import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';

const PatientList = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Dr. John Doe', // Replace with the actual user's name
    imageUrl: 'https://placekitten.com/40/40', // Replace with the actual image URL
  });

  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // Fetch patients from the backend when the component mounts
    fetch('https://your-api-url/patients')
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error('Error fetching patients:', error));
  }, []);

  const handleTabClick = (tabName) => {
    // Fetch information from the backend based on the selected tab
    // Replace 'fetchDataFromBackend' with your actual fetching logic
    // Pass the fetched data to setSelectedPatient
    // fetchDataFromBackend(tabName).then((data) => setSelectedPatient(data));

    // For demonstration purposes, let's assume 'tabName' is the patient ID
    setSelectedPatient(tabName);

    // Update the active tab
    setActiveTab(tabName);
  };

  
  return (
    <div className="flex p-9">
      <div className="w-1/5 bg-[#8E98A8] p-4 rounded-md h-full">
      <p
          className={`cursor-pointer ${activeTab === 'Overview' ? 'text-white bg-[#224AA0] rounded-md' : 'text-[#224AA0]'}`}
          onClick={() => handleTabClick('Overview')}
        >
          Overview
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'My Patients' ? 'text-white bg-[#224AA0] rounded-md' : 'text-[#224AA0]'}`}
          onClick={() => handleTabClick('My Patients')}
        >
          My Patients
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'Prescriptions' ? 'text-white bg-[#224AA0] rounded-md' : 'text-[#224AA0]'}`}
          onClick={() => handleTabClick('Prescriptions')}
        >
          Prescriptions
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'Appointments' ? 'text-white bg-[#224AA0] rounded-md' : 'text-[#224AA0]'}`}
          onClick={() => handleTabClick('Appointments')}
        >
          Appointments
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'Messages' ? 'text-white bg-[#224AA0] rounded-md' : 'text-[#224AA0]'}`}
          onClick={() => handleTabClick('Messages')}
        >
          Messages
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'Settings' ? 'text-white bg-[#224AA0] rounded-md' : 'text-[#224AA0]'}`}
          onClick={() => handleTabClick('Settings')}
        >
          Settings
        </p>
      </div>

      {/* Second div with patient details, search bar, and other components */}
      <div className=' justify-between items-center w-full'>
        <div className="flex items-center space-x-9">
          <input
            type="text"
            placeholder="Search patients, appointments etc..."
            className="w-full p-2 border mb-4 rounded-md"
          />


          <div className='flex space-x-6'>
            <button className="text-white">
              <span>🔔</span>
              <FaBell />
            </button>
            <img
              src={userProfile.imageUrl}
              alt={userProfile.name}
              className="rounded-full"
            />
            <div>
              <p className='font-semibold text-lg'>{userProfile.name}</p>
              <p className='text-sm'>{userProfile.profession}</p>
            </div>
          </div>
        </div>
        <div className="mt-7 mb-4">
          <p className='font-semibold'>
            Good {new Date().getHours() < 12 ? 'morning' : 'afternoon'}, Dr. [DrName]
          </p>
          <p>Trust you are having a great day</p>
        </div>
        {/* Render patient details or information from the backend based on selectedPatient */}
      <div className="flex-1 p-4">
        {/* Display selected patient details or fetched information */}
        {selectedPatient ? (
          <div>
            {/* Render information based on the selected patient */}
            <h2>Patient Details for {selectedPatient}</h2>
          </div>
        ) : (
          <p>Select a tab to view details.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default PatientList;
