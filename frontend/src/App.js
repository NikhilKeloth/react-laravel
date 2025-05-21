// import React from 'react';
// import NameForm from './components/NameForm';
// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <NameForm />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingPage from './common/LoadingPage';
import AdminLogin from './admin/pages/Login';
// import VendorLogin from './vendor/pages/Login';
// import AdminDashboard from './admin/pages/Dashboard';
// import VendorDashboard from './vendor/pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Common */}
        <Route path="/" element={<LoadingPage />} />
    
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
       
      </Routes>
    </Router>
  );
}
//  {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />

//         {/* Vendor Routes */}
//         <Route path="/vendor/login" element={<VendorLogin />} />
//         <Route path="/vendor/dashboard" element={<VendorDashboard />} />

export default App;
