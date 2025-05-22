import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const AdminLogin = () => {
  const location = useLocation();
  const initialView = location.state?.view || 'login';

  const [view, setView] = useState(initialView);
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
  };

  return (
    <form onSubmit={handleSubmit} id="form-id">
      <input type="hidden" name="role" value="admin" />

      <div className="auth-header mb-5">
        <h2 className="title">Admin Sign In</h2>
        <div>Welcome back, login to your panel.</div>
      </div>

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
  const handleSignup = (e) => {
    e.preventDefault();
    alert('Signup form submitted');
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="auth-header mb-5">
        <h2 className="title">Admin Sign Up</h2>
        <div>Create your new account.</div>
      </div>

      {/* Placeholder for Name, Email, Password, Confirm Password */}
      <div className="form-group">
        <input className="form-control form-control-lg" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input type="email" className="form-control form-control-lg" placeholder="Email" required />
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-lg" placeholder="Password" required />
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" required />
      </div>

      <button type="submit" className="btn btn-lg btn-block btn--primary mt-xxl-3">
        Register
      </button>

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
