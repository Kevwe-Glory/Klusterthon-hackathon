import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const PatientDetails = () => {
  // Extracting the patient ID from the URL params using useParams
  const { id: patientId } = useParams();

  // State for storing the detailed information about a specific patient
  const [patientDetails, setPatientDetails] = useState(null);

  // Fetch the details of the specific patient from the backend
  useEffect(() => {
    // Example: Fetching patient details from an API
    // Replace the URL with your actual API endpoint
    fetch(`https://your-api-url/patients/${patientId}`)
      .then((response) => response.json())
      .then((data) => setPatientDetails(data))
      .catch((error) => console.error('Error fetching patient details:', error));
  }, [patientId]); // The dependency array ensures the effect runs whenever patientId changes

  return (
    <div className='p-6'>
      <div>
        <div className="flex flex-col items-center bg-green-500 p-9 rounded-md">
          <div className="flex items-center">
            <FaUsers className="text-4xl mr-2" />
            <div>
              <p>30K+</p>
              <p>Patients</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-bold'>Patient Profile</h2>
      {patientDetails ? (
        <div className='mt-9 '>
          <div className='flex'>
            <img src="" alt="" />
            <p>
              <strong>Name:</strong> {patientDetails.firstName} {patientDetails.lastName}
            </p>
            <div className='bg-black'>
              <p>Contact Details</p>
              <p>
                <strong>Email:</strong> {patientDetails.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {patientDetails.email}
              </p>
              <p>
                <strong>Email:</strong> {patientDetails.address}
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>Overview</p>
            </div>
            <div>
              <p>Report</p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <p className='font-bold'>Patient current medication progress</p>
              <p>60% complete</p>
            </div>
            <div>
              <p>Patient Adherence Report</p>
              <p>Medications report</p>
            </div>
          </div>
        </div>

      ) : (
        <p>Loading patient details...</p>
      )}
    </div>
  );
};

export default PatientDetails;

