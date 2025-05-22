import {useState} from 'react';

export const useNameValidation = () => {
 const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isConfirmValid, setIsConfirmValid] = useState(false);

  const validateName = (value) => {
    setName(value);
  //alert(value);
    if(!value.trim()) {
      setError('Name is required');
     // alert('Name is required');
      setIsValid(false);
      return;
    }

    if(value.trim().length < 2) {
      setError('Name should be at least 2 characters long');
     // alert('Name should be at least 2 characters long');
      setIsValid(false);
      return;
    }

    if(!/^[A-Za-z\s'-]+$/.test(value)) {
      setError('Name should only contain letters, spaces, hyphens, and apostrophes');
      setIsValid(false);
      return;
    }

    setError('');
    setIsValid(true);
  };
  const validateEmail = (value) => {
    setEmail(value);

    if (!value.trim()) {
      setEmailError('Email is required');
      setIsEmailValid(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Enter a valid email address');
      setIsEmailValid(false);
      return;
    }

    setEmailError('');
    setIsEmailValid(true);
  };

  const validatePassword = (value) => {
    setPassword(value);
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

    if (!value.trim()) {
      setPasswordError('Password is required');
      setIsPasswordValid(false);
      return;
    }
    if (!regex.test(value)) {
      setPasswordError('Password must be at least 6 characters, contain one capital letter and one special character');
      setIsPasswordValid(false);
      return;
    }
    setPasswordError('');
    setIsPasswordValid(true);

    // Also revalidate confirmPassword
    validateConfirmPassword(confirmPassword, value);
  };

  const validateConfirmPassword = (value, pwd = password) => {
    setConfirmPassword(value);
    if (!value.trim()) {
      setConfirmPasswordError('Confirm Password is required');
      setIsConfirmValid(false);
      return;
    }
    if (value !== pwd) {
      setConfirmPasswordError('Passwords do not match');
      setIsConfirmValid(false);
      return;
    }
    setConfirmPasswordError('');
    setIsConfirmValid(true);
  };


  // alert(name);
   //console.log(error);

  return {
    name,
    error,
    isValid,
    validateName,
    setName,
    email,
    emailError,
    isEmailValid,
    validateEmail,
    setEmail,
    password,
    passwordError,
    isPasswordValid,
    validatePassword,

    confirmPassword,
    confirmPasswordError,
    isConfirmValid,
    validateConfirmPassword

  };
};