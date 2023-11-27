// Import statements (ensure all necessary imports are included)
import React, { useState, useEffect } from 'react';
import { FaBell, FaHome, FaUsers, FaPrescriptionBottleAlt, FaEnvelope, FaCog, FaCalendarAlt } from 'react-icons/fa';
import ProfileEdit from './ProfileEdit';

// Sidebar component
const Sidebar = ({ activeTab, handleTabClick }) => {
  const tabs = [
    { name: 'Overview', icon: <FaHome /> },
    { name: 'My Patients', icon: <FaUsers /> },
    { name: 'Prescriptions', icon: <FaPrescriptionBottleAlt /> },
    { name: 'Messages', icon: <FaEnvelope /> },
    { name: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div className='bg-[#8E98A8] w-1/5 p-4 rounded-md flex flex-col'>
      {tabs.map((tab) => (
        <p
          key={tab.name}
          className={`cursor-pointer flex p-4 items-center ${activeTab === tab.name
            ? 'text-white bg-[#224AA0] rounded-lg p-2'
            : 'text-[#224AA0]'
          }`}
          onClick={() => handleTabClick(tab.name)}
        >
          {tab.icon} <span className="ml-2">{tab.name}</span>
        </p>
      ))}
    </div>
  );
};

// ... (UserProfile and other components remain the same)

// Function to get greeting based on the time of the day
const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return 'Good Morning,';
  } else if (currentHour < 18) {
    return 'Good Afternoon,';
  } else {
    return 'Good Evening,';
  }
};

// Dashboard component
const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [userProfile, setUserProfile] = useState({
    name: 'Dr. John Doe',
    imageUrl: 'https://placekitten.com/40/40',
    profession: 'Your Profession', // Replace with actual data from the backend
  });

  const [activeTab, setActiveTab] = useState('Overview');
  const [searchText, setSearchText] = useState('');
  const [notificationCount, setNotificationCount] = useState(3);

  // Sample data for static demonstration (replace with actual backend calls)
  const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    // Add more patient data as needed
  ];

  const messages = [
    { id: 1, senderName: 'Sender 1', date: '2023-01-01', subject: 'Message 1' },
    { id: 2, senderName: 'Sender 2', date: '2023-01-02', subject: 'Message 2' },
    // Add more message data as needed
  ];

  const completedPrescriptions = [
    { id: 1, patientName: 'Patient 1', date: '2023-01-01', status: 'completed' },
    { id: 2, patientName: 'Patient 2', date: '2023-01-02', status: 'completed' },
    // Add more completed prescription data as needed
  ];

  const inProgressPrescriptions = [
    { id: 3, patientName: 'Patient 3', date: '2023-01-03', status: 'in-progress' },
    { id: 4, patientName: 'Patient 4', date: '2023-01-04', status: 'in-progress' },
    // Add more in-progress prescription data as needed
  ];

  const notCompletedPrescriptions = [
    { id: 5, patientName: 'Patient 5', date: '2023-01-05', status: 'not-completed' },
    { id: 6, patientName: 'Patient 6', date: '2023-01-06', status: 'not-completed' },
    // Add more not-completed prescription data as needed
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleProfileEditClose = () => {
    setIsEditingProfile(false);
  };

  const handleNotificationClick = () => {
    // Implement notification click logic
    // For example, showNotificationDetails();
  };

  // ... (remaining code remains the same)

  return (
    <div className={`flex flex-col min-h-screen p-4 md:flex-row ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />

      {/* Main Content */}
      <div className="flex flex-col pl-9 w-full md:w-4/5">
        {/* ... (Top Bar with Search, Notification, and Profile) */}
        {/* ... (Greeting and Content) */}
        <div>
          <div>
            <p className="text-2xl font-semibold">
              {getGreeting()} {userProfile.name.split(' ')[0]}
            </p>
          </div>
          <div className="mt-6">
            {/* Content based on the active tab */}
            {activeTab === 'Overview' && (
              <div>
                {/* ... (Overview content) */}
                <div>
  <div className="grid grid-cols-3 gap-4 text-white pt-10 mt-4">
    <div className="flex flex-col items-center bg-blue-600 p-9 rounded-md">
      <div className="flex items-center">
        <FaUsers className="text-4xl mr-2" />
        <div>
          <p>100K+</p>
          <p>Prescription</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center bg-green-500 p-9 rounded-md">
      <div className="flex items-center">
        <FaCalendarAlt className="text-4xl mr-2" />
        <div>
          <p>30K+</p>
          <p>Patients</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center bg-orange-400 p-9 rounded-md">
      <div className="flex items-center">
        <FaPrescriptionBottleAlt className="text-4xl mr-2" />
        <div>
          <p>50K+</p>
          <p>Consultation</p>
        </div>
      </div>
    </div>
  </div>

  {/* Second div with reports and graph */}
  <div className="flex mt-8">
    <div className="flex-1 pr-4">
      <div className="flex items-center">
        <p className="text-lg font-semibold mr-4">General Patient Adherence Report</p>
        {/* Dropdown for selecting the year */}
        <div className="mt-4">
          <select
            id="yearDropdown"
            name="yearDropdown"
            className="p-2 border rounded-md"
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            {/* Add more years if needed */}
          </select>
        </div>
      </div>
    </div>
  </div>

  <div className='flex'>
  <div className='bg-orange-500 border border-solid border-white p-4 rounded-full'>
  <prescription list title="Completed Prescriptions"  />
  <p className='text-white'>Completed</p>
</div>

    <div>
      <prescription list title="In Progress Prescriptions"  />
    </div>
    <div>
      <prescription list title="Not Completed Prescriptions"  />
    </div>
  </div>
  <div></div>
  <p>Overview content goes here.</p>
</div>

              </div>
            )}
            {activeTab === 'My Patients' && (
              <div>
                {/* ... (My Patients content) */}
              </div>
            )}
            {activeTab === 'Prescriptions' && (
              <div>
                {/* ... (Prescriptions content) */}
              </div>
            )}
            {activeTab === 'Messages' && (
              <div>
                {/* ... (Messages content) */}
              </div>
            )}
            {activeTab === 'Settings' && (
              <div>
                {/* ... (Settings content) */}
              </div>
            )}
            {/* Add content for other tabs if needed */}
          </div>
        </div>
      </div>

      {/* Profile Edit Modal */}
      {isEditingProfile && <ProfileEdit onClose={handleProfileEditClose} />}
    </div>
  );
};

// ... (PrescriptionList and MessageList components remain the same)

export default Dashboard;
