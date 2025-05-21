import {useState} from 'react';

export const useNameValidation = () => {
  const [name, setName] = useState(''); //state variable - name & setName
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState('');
  const [error1, setError1] = useState('');
  const [isValid1, setIsValid1] = useState(false);

  const validateName = (value) => {
    setName(value);

    if(!value.trim()) {
      setError('Name is required');
      setIsValid(false);
      return;
    }

    if(value.trim().length < 2) {
      setError('Name should be at least 2 characters long');
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
    //console.log(email);
    setEmail(value);
    if(!value.trim()) {
      //console.log('here');
      setError1('Email is required');
      setIsValid1(false);
      return;
    }

    if(value.trim().length < 5) {
     // console.log('here');
      setError1('Email should be at least 2 characters long');
      setIsValid1(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError1('Please enter a valid email address');
      setIsValid1(false);
      return;
    }    

    setError1('');
    setIsValid1(true);

   // console.log(error1);
  }  
  return {
    name,
    error,
    isValid,
    validateName,
    setName,
    email,    
    validateEmail,
    setEmail,
    error1,
    isValid1
  };
  
};