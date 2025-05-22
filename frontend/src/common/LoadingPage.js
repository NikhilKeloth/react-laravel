import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  return (
    <div  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundImage: 'url("./images/new.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>WELCOME!</h1>
      </div>
      <div>
        <img
          src="/dad.png"
          alt="my Logo"
          style={{ display: 'block', margin: '0 auto', width: '200px', height: '100px' }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => navigate('/admin/login')}
          style={{
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
        >
          Admin Login
        </button>
        <button
          onClick={() => navigate('/vendor/login')}
          style={{
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
        >
          Vendor Login
        </button>
        <div style={{ marginTop: '20px',display: 'flex', justifyContent: 'center' }}>
          <button
           onClick={() => navigate('/admin/login', { state: { view: 'signup' } })}
          style={{
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: '#934578',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
          >Sign up</button>
          
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
