import React from 'react';
import { useNameValidation } from '../hooks/useNameValidation';

const NameForm = () => {
  const {name, error, isValid, validateName } = useNameValidation();
  const {email, error1, isValid1, validateEmail } = useNameValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isValid && isValid1) {
      alert(`Form submitted successfully! Name: ${name}`);
    }
  };

  return (
    <div className='form-container'>
      <h2> Name Validate Form </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:-</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={(e) => validateName(e.target.value)}
            className={error ? 'input-error' : ''}
          />
          {error && <div className='error-message1'>{error}</div>}
          <label htmlFor='email'>Email:-</label>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            className={error1 ? 'input-error' : ''}
          />
          {error1 && <div className='error-message2'>{error1}</div>}
        </div>
        <button type='submit' disabled={!isValid  && !isValid1}>Submit</button>
      </form>
      </div>
  );
};

export default NameForm;

