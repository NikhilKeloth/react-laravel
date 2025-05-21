import React, { useState } from 'react';
import { useNameValidation } from '../hooks/useNameValidation';

const NameForm = () => {
  const { name, error, isValid, validateName } = useNameValidation();
  const { email, error1, isValid1, validateEmail } = useNameValidation();

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePhone = (value) => {
    setPhone(value);
    const regex = /^[0-9]{10}$/;
    if (!regex.test(value)) {
      setPhoneError('Phone number must be 10 digits');
      setIsPhoneValid(false);
    } else {
      setPhoneError('');
      setIsPhoneValid(true);
    }
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmError('Passwords do not match');
    } else {
      setConfirmError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && isValid1 && isPhoneValid && isPasswordValid && confirmPassword === password) {
      alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    }
  };

  return (
    <div className='form-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>

          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => validateName(e.target.value)}
            className={error ? 'input-error' : ''}
          />
          {error && <div className='error-message'>{error}</div>}

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            className={error1 ? 'input-error' : ''}
          />
          {error1 && <div className='error-message'>{error1}</div>}

          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            id='phone'
            value={phone}
            onChange={(e) => validatePhone(e.target.value)}
            className={phoneError ? 'input-error' : ''}
          />
          {phoneError && <div className='error-message'>{phoneError}</div>}

          <label htmlFor='password'>New Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
            className={passwordError ? 'input-error' : ''}
          />
          {passwordError && <div className='error-message'>{passwordError}</div>}

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => validateConfirmPassword(e.target.value)}
            className={confirmError ? 'input-error' : ''}
          />
          {confirmError && <div className='error-message'>{confirmError}</div>}

        </div>
        <button
          type='submit'
          disabled={
            !isValid || !isValid1 || !isPhoneValid || !isPasswordValid || confirmPassword !== password
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NameForm;
