import React, { useState, useEffect } from 'react';
import { FaShare, FaBell, FaFileMedical, FaPills, FaChartBar, FaUser } from 'react-icons/fa';

const MedicationPage = () => {
  const [medicationData, setMedicationData] = useState({
    date: new Date(),
    medications: [
      { name: 'Medication 1', time: 'Morning' },
      { name: 'Medication 2', time: 'Afternoon' },
      // Add more medication details as needed
    ],
  });

  // For demonstration purposes, a sample data is used here
  const sampleData = {
    date: new Date(),
    medications: [
      { name: 'Paracetamol', time: 'Morning' },
      { name: 'Diuretic', time: 'Afternoon' },
      { name: 'Beta blocker', time: 'Afternoon' },
      { name: 'Cloroquine', time: 'Afternoon' },
    ],
  };

  useEffect(() => {
    setMedicationData(sampleData);
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleNotificationClick = () => {
    // Implement the logic for medication reminder notification
    // This could involve using browser notifications or a dedicated notification library
    console.log('Reminder notification triggered!');
  };

  const formattedDate = medicationData.date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col">
      {/* Header with black background */}
      <div className="bg-black p-4 text-white relative rounded-b-xl">
        <FaShare className="absolute right-4 top-4 text-lg" />
        <h2 className="font-bold text-2xl mt-2 text-center py-10">My Medications</h2>
      </div>

      {/* Main content with date and medication details */}
      <div className="p-4 m-8">
        {/* Date display */}
        <div className="mb-4 text-center pt-9">
          <p className='text-xl font-bold'>Today</p>
          <h3 className="mb-2">{formattedDate}</h3>
        </div>

        {/* Medication list */}
        <div className='pt-9'>
          {medicationData.medications.map((medication, index) => (
            <div key={index} className="border p-3 mb-2 flex justify-between items-center">
              <div>
                <h4 className="text-lg font-bold">{medication.name}</h4>
                <p className="text-gray-600">Time: {medication.time}</p>
              </div>
              <button
                onClick={handleNotificationClick}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                <FaBell />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons for mobile view */}
      <div className="flex justify-between p-4 bg-gray-600">
        <MobileButton icon={<FaFileMedical />} text="Prescription" />
        <MobileButton icon={<FaPills />} text="Medication" />
        <MobileButton icon={<FaUser />} text="Profile" />
      </div>
    </div>
  );
};

// Extracted reusable mobile navigation button component
const MobileButton = ({ icon, text }) => (
  <button className=" text-white px-4 py-2 rounded-md">
    {icon && <span className="mr-2">{icon}</span>}
    {text}
  </button>
);

export default MedicationPage;
