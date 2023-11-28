import React, { useState, useEffect } from 'react';
import { FaBell, FaHome, FaUsers, FaPrescriptionBottleAlt, FaEnvelope, FaCog, FaCalendarAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';
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

// Profile component
const UserProfile = ({ userProfile }) => (
  <div className="flex items-center space-x-2">
    <button className="text-black">
      <FaBell />
    </button>
    <img src={userProfile.imageUrl} alt={userProfile.name} className="rounded-full w-10 h-10" />
    <div>
      <p className="font-semibold text-lg">{userProfile.name}</p>
      <p className="text-sm">{userProfile.profession}</p>
    </div>
  </div>
);

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

  const [activeTab, setActiveTab] = useState('Overview'); // Set initial active tab to 'Overview'
  const [searchText, setSearchText] = useState('');
  const [notificationCount, setNotificationCount] = useState(3);
  const [patients, setPatients] = useState([]);
  const [showAllPatients, setShowAllPatients] = useState(false);

  // Consultations, Prescriptions, and Messages state
  // const [consultations, setConsultations] = useState([]);
  // const [prescriptions, setPrescriptions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [completedPrescriptions, setCompletedPrescriptions] = useState([]);
  const [inProgressPrescriptions, setInProgressPrescriptions] = useState([]);
  const [notCompletedPrescriptions, setNotCompletedPrescriptions] = useState([]);

  useEffect(() => {
    fetchUserProfile();
    fetchPatients();
    // fetchConsultations();
    // fetchPrescriptions();
    fetchMessages();
    fetchPrescriptionStatus('completed');
    fetchPrescriptionStatus('in-progress');
    fetchPrescriptionStatus('not-completed');
  }, []);

  const handleReadMessage = () => {
    // Simulate marking the message as read
    // This is just an example, replace it with your actual logic
    // For example, if you have an array of unread messages, you can pop one message from the array

    // Decrement the notification count
    setNotificationCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const fetchUserProfile = () => {
    // Simulating a fetch request to get user profile data
    setTimeout(() => {
      setUserProfile({
        name: 'Dr. Jane Doe',
        imageUrl: 'https://placekitten.com/50/50',
        profession: 'Medical Professional',
      });
    }, 1000);
  };

  const fetchPatients = () => {
    // Simulating a fetch request to get the list of patients
    setTimeout(() => {
      setPatients([
        { id: 1, name: 'Patient 1', status: 'Active', imageUrl: 'https://placekitten.com/40/40' },
        { id: 2, name: 'Patient 2', status: 'Pending', imageUrl: 'https://placekitten.com/41/41' },
        { id: 3, name: 'Patient 3', status: 'Active', imageUrl: 'https://placekitten.com/42/42' },
      ]);
    }, 1000);
  };



  const fetchMessages = () => {
    // Simulating a fetch request to get message data
    setTimeout(() => {
      setMessages([
        { id: 1, senderName: 'Sender A', date: '2023-01-10', subject: 'Message 1' },
        { id: 2, senderName: 'Sender B', date: '2023-01-11', subject: 'Message 2' },
        { id: 3, senderName: 'Sender C', date: '2023-01-12', subject: 'Message 3' },
      ]);
    }, 1000);
  };

  const fetchPrescriptionStatus = (status) => {
    // Simulating a fetch request to get prescription status data
    setTimeout(() => {
      if (status === 'completed') {
        setCompletedPrescriptions([
          { id: 1, patientName: 'Patient X', date: '2023-01-05', status: 'completed' },
          { id: 2, patientName: 'Patient Y', date: '2023-01-06', status: 'completed' },
        ]);
      } else if (status === 'in-progress') {
        setInProgressPrescriptions([
          { id: 3, patientName: 'Patient Z', date: '2023-01-07', status: 'in-progress' },
        ]);
      } else if (status === 'not-completed') {
        setNotCompletedPrescriptions([
          { id: 4, patientName: 'Patient W', date: '2023-01-08', status: 'not-completed' },
        ]);
      }
    }, 1000);
  };
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

  const handleShowAllPatients = () => {
    setShowAllPatients((prevShowAll) => !prevShowAll);
  };

  const handleNotificationClick = () => {
    // Implement notification click logic
    // For example, showNotificationDetails();
  };


  const [startYear] = useState(2020); 
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
  
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  return (
    <div className={`flex flex-col min-h-screen p-4 md:flex-row ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />

      {/* Main Content */}
      <div className="flex flex-col pl-9 w-full md:w-4/5">
        {/* Top Bar with Search, Notification, and Profile */}
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchInputChange}
              className="border p-2 rounded-md"
            />
            <button className="text-black" onClick={handleToggleDarkMode}>
              Toggle Dark Mode
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-black" onClick={handleNotificationClick}>
              <FaBell />
              {notificationCount > 0 && <span className="bg-red-500 text-white rounded-full p-1">{notificationCount}</span>}
               {notificationCount > 0 && (
        <span className="bg-red-500 text-white rounded-full p-1">
          {notificationCount}
        </span>
      )}
            </button>
            <button onClick={handleReadMessage}>Read New Message</button>
            <UserProfile userProfile={userProfile} />
          </div>
        </div>

        {/* Greeting and Content */}
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
  value={selectedYear}
  onChange={(e) => setSelectedYear(Number(e.target.value))}
  className="p-2 border rounded-md"
>
  {years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ))}
</select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex space-x-6 pt-5'>
                  <div>
                    <PrescriptionList title="Completed" prescriptions={completedPrescriptions} />
                  </div>
                  <div>
                    <PrescriptionList title="In Progress" prescriptions={inProgressPrescriptions} />
                  </div>
                  <div>
                    <PrescriptionList title="Not Completed" prescriptions={notCompletedPrescriptions} />
                  </div>
                </div>
                <div></div>
                <p>Overview content goes here.</p>
              </div>
            )}
            {activeTab === 'My Patients' && (
              <div>
                <div className="bg-green-500 p-5 text-white rounded-md">
                  <div className="flex items-center">
                    <FaUsers className="text-4xl mr-2" />
                    <div>
                      <p className='font-bold text-4xl'>{patients.length}K+</p>
                      <p>Patients</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-9 mt-20">
                  {/* Toggle button to show all patients */}
                  <p>Patient List</p>
                  <button onClick={handleShowAllPatients} className="flex items-center text-[#224AA0]">
                    {showAllPatients ? (
                      <>
                        View Less
                        <FaChevronUp className="ml-2" />
                      </>
                    ) : (
                      <>
                        View All
                        <FaChevronDown className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
                {/* Display list of patients based on showAllPatients */}
                <div className="bg-gray-500 p-4 rounded-lg">
                  <ul>
                    {patients.slice(0, showAllPatients ? patients.length : 10).map((patient) => (
                      <li key={patient.id} className="flex items-center justify-between border-b py-2">
                        <div className="flex items-center space-x-4">
                          {/* Display patient details */}
                          <img src={patient.imageUrl} alt={`Avatar for ${patient.name}`} className="rounded-full w-10 h-10" />
                          <div>
                            <p className="font-semibold text-white">{patient.name}</p>
                            <p className="text-sm text-white">{`Status: ${patient.status}`}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'Prescriptions' && (
              <div>
                {/* Display prescriptions based on status */}

              </div>
            )}
            {activeTab === 'Messages' && (
              <div>
                {/* Display messages */}
                <MessageList messages={messages} />
              </div>
            )}
            {activeTab === 'Settings' && (
              <div>
                <p>Settings content goes here.</p>
                {/* Footer */}
                <div className="mt-auto p-4 border-t">
                  <button onClick={handleEditProfile}>Edit Profile</button>
                </div>
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

// Helper component to display a list of prescriptions
const PrescriptionList = ({ title, prescriptions }) => (
  <div>
    <p className="text-xl font-semibold">{title}</p>
    {prescriptions.map((prescription) => (
      <div key={prescription.id} className="flex items-center justify-between border-b py-2">
        <div className="flex items-center space-x-4">
          {/* Display prescription details */}
          <div>
            <p className="font-semibold">{prescription.patientName}</p>
            <p className="text-sm">{prescription.date}</p>
          </div>
        </div>
        <p className={`text-sm ${prescription.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
          {prescription.status}
        </p>
      </div>
    ))}
  </div>
);

// Helper component to display a list of messages
const MessageList = ({ messages }) => (
  <div>
    <p className="text-xl font-semibold">Messages</p>
    {messages.map((message) => (
      <div key={message.id} className="flex items-center justify-between border-b py-2">
        <div className="flex items-center space-x-4">
          {/* Display message details */}
          <div>
            <p className="font-semibold">{message.senderName}</p>
            <p className="text-sm">{message.date}</p>
          </div>
        </div>
        {/* Additional message details */}
        <p className="text-sm">{message.subject}</p>
      </div>
    ))}
  </div>
);

export default Dashboard;

