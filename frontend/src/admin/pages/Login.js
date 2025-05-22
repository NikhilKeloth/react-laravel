//import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNameValidation } from '../hooks/useNameValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';


const AdminLogin = () => {
  const location = useLocation();
  const [view, setView] = useState('login');

  useEffect(() => {
    const viewState = location.state?.view || 'login';
    setView(viewState);
  }, [location.state]);
  return (
    <main id="content" role="main" className="main">
      <div className="auth-wrapper">
        <div className="auth-wrapper-left">
          <div className="auth-left-cont">
            <h2>PROJECT</h2>
            <h2 className="title">
              Admin <span className="d-block">Panel</span>
            </h2>
          </div>
        </div>

        <div className="auth-wrapper-right">
          <label className="badge badge-soft-success __login-badge">
            Software Version: 1.0.0
          </label>

          <div className="auth-wrapper-form">
            {view === 'login' ? (
              <LoginForm setView={setView} />
            ) : (
              <SignUpForm setView={setView} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

// Login Form Component
const LoginForm = ({ setView }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
   // alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
    const payload = {     
      email,password      
    };

    console.log(payload);
    try {
      const response = await axios.post('http://localhost:8000/api/admin/custom-login', {       
        email,password       
      });
    setSuccessMessage('Login successfully!');
    
    //  setTimeout(() => {
    //     window.location.href = '/admin/login';
    //   }, 2000);
     // window.location.href = '/admin/login';
      //navigate('/admin/login');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        const firstField = Object.keys(errors)[0];
        const firstError = errors[firstField][0];
        alert("Signin failed: " + firstError);
      }
      setErrorMessage('Login Error! Invalid UserName or Password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form-id">
      <input type="hidden" name="role" value="admin" />

      <div className="auth-header mb-5">
        <h2 className="title">Admin Sign In</h2>
        <div>Welcome back, login to your panel.</div>
      </div>
        {ErrorMessage && (
        <div
          style={{
            backgroundColor: '#E9D5DB',
            color: '#155724',
            padding: '10px 15px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #c3e6cb',
            textAlign: 'center',
          }}
        >
          {ErrorMessage}
        </div>
      )}

      {/* Email */}
      <div className="js-form-message form-group">
        <label className="input-label text-capitalize" htmlFor="signinSrEmail">
          Your Email
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          name="email"
          id="signinSrEmail"
          tabIndex="1"
          placeholder="email@address.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}
      <div className="js-form-message form-group mb-2">
        <label className="input-label" htmlFor="signupSrPassword">
          Password
        </label>
        <div className="input-group input-group-merge">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control form-control-lg"
            name="password"
            id="signupSrPassword"
            placeholder="6+ characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <div
            className="input-group-append"
            style={{ cursor: 'pointer' }}
            onClick={() => setShowPassword(!showPassword)}
            role="button"
            tabIndex={0}
          >
            <span className="input-group-text">
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>
      </div>

      {/* Remember Me & Forget Password */}
      <div className="d-flex justify-content-between mt-5">
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="termsCheckbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              name="remember"
            />
            <label className="custom-control-label text-muted" htmlFor="termsCheckbox">
              Remember Me
            </label>
          </div>
        </div>

        <div className="form-group">
          <span
            role="button"
            tabIndex={0}
            className="text-primary"
            onClick={() => alert('Forget Password modal would open here')}
            style={{ cursor: 'pointer' }}
          >
            Forget Password?
          </span>
        </div>
      </div>

      <button type="submit" className="btn btn-lg btn-block btn--primary mt-xxl-3">
        Login
      </button>
      {isLoading && (
        <div className="text-center mt-3">
          <Circles height="80" width="80" color="#0d6efd" ariaLabel="loading" />
        </div>
      )}

      <div className="text-center mt-4">
        Don’t have an account?{' '}
        <span
          role="button"
          tabIndex={0}
          className="text-primary"
          onClick={() => setView('signup')}
          style={{ cursor: 'pointer' }}
        >
          Sign Up
        </span>
      </div>
    </form>
  );
};

// SignUp Form Component
const SignUpForm = ({ setView }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const {
    name, error, isValid, validateName,
    email, emailError, isEmailValid, validateEmail,
    password, passwordError, isPasswordValid, validatePassword,
    confirmPassword, confirmPasswordError, isConfirmValid, validateConfirmPassword
  } = useNameValidation();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(''); 

    const payload = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    };

    console.log(payload);
    try {
      const response = await axios.post('http://localhost:8000/api/admin/custom-register', {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
     setSuccessMessage('Account created successfully! You can now login.');
     setTimeout(() => {
        navigate('/admin/login', { state: { view: 'login' } });
      }, 2000);
     // window.location.href = '/admin/login';
      //navigate('/admin/login');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        const firstField = Object.keys(errors)[0];
        const firstError = errors[firstField][0];
        alert("Signup failed: " + firstError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="auth-header mb-5">
        <h2 className="title">Admin Sign Up</h2>
        <div>Create your new account.</div>
      </div>
       {successMessage && (
        <div
          style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '10px 15px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #c3e6cb',
            textAlign: 'center',
          }}
        >
          {successMessage}
        </div>
      )}

      <div className="form-group">
        <input
          placeholder="Name"
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => validateName(e.target.value)}
          className={error ? 'input-error form-control form-control-lg' : 'form-control form-control-lg'}
        />
        {error && <div style={{ color: 'red', marginTop: '4px', fontSize: '0.9rem' }}>{error}</div>}
      </div>

      <input
        placeholder="Email"
        required
        type="email"
        value={email}
        onChange={(e) => validateEmail(e.target.value)}
        className={emailError ? 'input-error form-control form-control-lg' : 'form-control form-control-lg'}
      />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          className={passwordError ? 'input-error form-control form-control-lg' : 'form-control form-control-lg'}
        />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => validateConfirmPassword(e.target.value)}
          className={confirmPasswordError ? 'input-error form-control form-control-lg' : 'form-control form-control-lg'}
        />
        {confirmPasswordError && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
      </div>

      <button
        type="submit"
        disabled={!isValid || !isEmailValid || !isPasswordValid || !isConfirmValid || isLoading}
        className="btn btn-lg btn-block btn--primary mt-xxl-3"
      >
        Register
      </button>

      {isLoading && (
        <div className="text-center mt-3">
          <Circles height="80" width="80" color="#0d6efd" ariaLabel="loading" />
        </div>
      )}

      <div className="text-center mt-4">
        Already have an account?{' '}
        <span
          role="button"
          tabIndex={0}
          className="text-primary"
          onClick={() => setView('login')}
          style={{ cursor: 'pointer' }}
        >
          Login
        </span>
      </div>
    </form>
  );
};

export default AdminLogin;
