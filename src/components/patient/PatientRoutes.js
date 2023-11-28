// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';  // Your main App component

// ReactDOM.render(
//   <BrowserRouter>
//     <App role="patient" />
//   </BrowserRouter>,
//   document.getElementById('root')
// );


// import React from 'react';
// import { Route } from 'react-router-dom';
// import PatientLandingPage from './PatientLandingPage';
// import MedicationDetails from './MedicationDetails';
// import UpdatePatientDetails from './UpdatePatientDetails';
// import PatientChangePassword from '../auth/PatientChangePassword';
// import PasswordReset from '../auth/PasswordReset';

// const PatientRoutes = () => {
//   return (
//     <React.Fragment>
//       <Route path="/" element={<PatientLandingPage />} />
//       <Route path="/medication-detail" element={<MedicationDetails />} />
//       <Route path="/update-patient/:id" element={<UpdatePatientDetails />} />
//       <Route path="/change-password" element={<PatientChangePassword />} />
//       <Route path="/password-reset" element={<PasswordReset />} />
//     </React.Fragment>
//   );
// };

// export default PatientRoutes;


// import React from 'react';
// import { Route } from 'react-router-dom';
// import PatientLandingPage from '../patient/PatientLandingPage';
// import MedicationDetails from '../patient/MedicationDetails';
// import UpdatePatientDetails from '../patient/UpdatePatientDetails';
// import PatientChangePassword from '../auth/PatientChangePassword';
// import PasswordReset from '../auth/PasswordReset';

// const PatientRoutes = () => {
//   return (
//     <React.Fragment>
//       <Route path="/" element={<PatientLandingPage />} />
//       <Route path="/medication-detail" element={<MedicationDetails />} />
//       <Route path="/update-patient/:id" element={<UpdatePatientDetails />} />
//       <Route path="/change-password" element={<PatientChangePassword />} />
//       <Route path="/password-reset" element={<PasswordReset />} />
//     </React.Fragment>
//   );
// };

// export default PatientRoutes;


// PatientRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientLandingPage from './PatientLandingPage';
import MedicationDetails from './MedicationDetails';
import UpdatePatientDetails from '../auth/UpdatePatientDetails';
import PatientChangePassword from '../auth/PatientChangePassword';
import PasswordReset from '../auth/PasswordReset';

const PatientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PatientLandingPage />} />
      <Route path="/medication-detail" element={<MedicationDetails />} />
      <Route path="/update-patient/:id" element={<UpdatePatientDetails />} />
      <Route path="/change-password" element={<PatientChangePassword />} />
      <Route path="/patient/password-reset" element={<PasswordReset />} />
    </Routes>
  );
};

export default PatientRoutes;

