import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const PatientDetails = () => {
  // Extracting the patient ID from the URL params using useParams
  const { id: patientId } = useParams();

  // Sample static data for demonstration
  const staticPatientDetails = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main St, City',
  };

  // Sample static data for medication progress
  const staticMedicationProgress = 60;

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
      {staticPatientDetails ? (
        <div className='mt-9'>
          <div className='flex'>
            <img src="" alt="" />
            <p>
              <strong>Name:</strong> {staticPatientDetails.firstName} {staticPatientDetails.lastName}
            </p>
            <div className='bg-black'>
              <p>Contact Details</p>
              <p>
                <strong>Email:</strong> {staticPatientDetails.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {staticPatientDetails.email}
              </p>
              <p>
                <strong>Email:</strong> {staticPatientDetails.address}
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
              <p>{staticMedicationProgress}% complete</p>
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
