// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';  // Your main App component

// ReactDOM.render(
//   <BrowserRouter>
//     <App role="professional" />
//   </BrowserRouter>,
//   document.getElementById('root')
// );


// import React from 'react';
// import { Route } from 'react-router-dom';
// import LandingPage from './LandingPage';
// import Dashboard from './Dashboard';
// import PatientDetails from './PatientDetails';
// import ProfileEdit from './ProfileEdit';

// const ProfessionalRoutes = () => {
//   return (
//     <React.Fragment>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/patient/:id" element={<PatientDetails />} />
//       <Route path="/profile" element={<ProfileEdit />} />
//     </React.Fragment>
//   );
// };

// export default ProfessionalRoutes;


// import React from 'react';
// import { Route } from 'react-router-dom';
 
// // import LandingPage from './LandingPage';
// import Dashboard from '../professional/Dashboard';
// import PatientDetails from '../professional/PatientDetails';
// import ProfileEdit from '../professional/ProfileEdit';
// import LandingPage from '../patient/PatientLandingPage';
// import Login from '../auth/Login'


// const ProfessionalRoutes = () => {
//   return (
//     <React.Fragment>
//       <Route path="/professional" element={<LandingPage/>} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/patient/:id" element={<PatientDetails />} />
//       <Route path="/profile" element={<ProfileEdit />} />
//       <Route path="/professional/login" element={<Login />} />
//     </React.Fragment>
//   );
// };

// export default ProfessionalRoutes;


// ProfessionalRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../professional/LandingPage';
import Dashboard from '../professional/Dashboard';
import PatientDetails from '../professional/PatientDetails';
import ProfileEdit from '../professional/ProfileEdit';
import Login from '../auth/Login';
import RegisterHealthcareProfessional from '../auth/RegisterHealthcareProfessional';
import ChangePassword from '../auth/ChangePassword';
import UpdatePatientDetails from '../auth/UpdatePatientDetails';

const ProfessionalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterHealthcareProfessional />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patient/:id" element={<PatientDetails />} />
      <Route path="/update-patient/:id" element={<UpdatePatientDetails />} />
      <Route path="/profile" element={<ProfileEdit />} />
    </Routes>
  );
};

export default ProfessionalRoutes;
