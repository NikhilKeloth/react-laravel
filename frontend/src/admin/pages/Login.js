import React, { useState } from 'react';

const AdminLogin = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  // Show/hide password toggle state
  const [showPassword, setShowPassword] = useState(false);

  // Simple form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login API call here
    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
  };

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
            Software Version: 1.0.0 {/* You can replace with env variable or props */}
          </label>

          <div className="auth-wrapper-form">
            <form onSubmit={handleSubmit} id="form-id">
              <input type="hidden" name="role" value="admin" />

              <div className="auth-header">
                <div className="mb-5">
                  <h2 className="title">Admin Sign In</h2>
                  <div>Welcome back, login to your panel.</div>
                </div>
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
                  aria-label="email@address.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="js-form-message form-group mb-2">
                <label className="input-label" htmlFor="signupSrPassword" tabIndex="0">
                  <span className="d-flex justify-content-between align-items-center">Password</span>
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
                    aria-label="Password"
                    required
                    minLength={6}
                  />
                  <div
                    className="input-group-append"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
                    }}
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
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') alert('Forget Password modal would open here');
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    Forget Password?
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-block btn--primary mt-xxl-3"
                id="signInBtn"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
