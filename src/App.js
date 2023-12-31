import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/professional/LandingPage';
import PatientLandingPage from './components/patient/PatientLandingPage';
import Login from './components/auth/Login';
import PatientLogin from './components/auth/PatientLogin';
import RegisterPatient from './components/auth/RegisterPatient';
import RegisterHealthcareProfessional from './components/auth/RegisterHealthcareProfessional';
import ChangePassword from './components/auth/ChangePassword';
import PatientDetails from './components/professional/PatientDetails';
import UpdatePatientDetails from './components/auth/UpdatePatientDetails';
import MedicationDetails from './components/patient/MedicationDetails';
import PatientChangePassword from './components/auth/PatientChangePassword';
import PasswordReset from './components/auth/PasswordReset';
import Dashboard from './components/professional/Dashboard';
import ProfileEdit from './components/professional/ProfileEdit';


function App() {
  return (
    <Routes>
      {/* Healthcare Professional Routes */}
      <Route path="/professional" element={<LandingPage />} />
      <Route path="/professional/login" element={<Login />} />
      <Route path="/professional/register" element={<RegisterHealthcareProfessional />} />
      <Route path="/professional/change-password" element={<ChangePassword />} />
      <Route path="/professional/dashboard" element={<Dashboard />} />
      <Route path="/professional/patient/:id" element={<PatientDetails />} />
      <Route path="/professional/update-patient/:id" element={<UpdatePatientDetails />} />
      <Route path="/professional/profile" element={<ProfileEdit />} />


      {/* Patient Routes */}
      <Route path="/patient" element={<PatientLandingPage />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/register" element={<RegisterPatient />} />
      <Route path="/patient/change-password" element={<PatientChangePassword />} />
      <Route path="/patient/password-reset" element={<PasswordReset />} />
      <Route path="/patient/medication-detail" element={<MedicationDetails />} />

      <Route path="*" element={<Navigate to="/patient" />} />
    </Routes>
  );
}

export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ProfessionalRoutes from './components/professional/ProfessionalRoutes'
// import PatientRoutes from './components/patient/PatientRoutes'


// const App = ({ role }) => {
//   return (
//     <Routes>
//       {role === 'professional' && <Route path="/*" element={<ProfessionalRoutes />} />}
//       {role === 'patient' && <Route path="/*" element={<PatientRoutes />} />}
//     </Routes>
//   );
// };

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ProfessionalRoutes from './components/professional/ProfessionalRoutes';
// import PatientRoutes from './components/patient/PatientRoutes';

// const App = ({ role }) => {
//   return (
//     <Routes>
//       {role === 'professional' && <Route path="/*" element={<ProfessionalRoutes />} />}
//       {role === 'patient' && <Route path="/*" element={<PatientRoutes />} />}
//     </Routes>
//   );
// };

// export default App;


// App.js

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ProfessionalRoutes from './components/professional/ProfessionalRoutes';
// import PatientRoutes from './components/patient/PatientRoutes';

// const App = ({ role }) => {
//   return (
//     <Routes>
//       {role === 'professional' && <Route path="/*" element={<ProfessionalRoutes />} />}
//       {role === 'patient' && <Route path="/*" element={<PatientRoutes />} />}
//     </Routes>
//   );
// };

// export default App;

