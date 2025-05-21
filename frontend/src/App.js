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
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LoadingPage from './common/LoadingPage';
import AdminLogin from './admin/pages/Login';
import VendorLogin from './vendor/pages/Login';


function App() {
  return (
    <Router>
      {/* Temporary navigation for testing */}
          <nav
        style={{
          backgroundColor: '#333',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '8px 12px',
            borderRadius: '4px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Home
        </Link>

        <Link
          to="/admin/login"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '8px 12px',
            borderRadius: '4px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Admin Login
        </Link>

        <Link
          to="/vendor/login"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '8px 12px',
            borderRadius: '4px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Vendor Login
        </Link>
      </nav>


      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

