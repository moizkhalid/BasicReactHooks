import React, { useState } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor=''>First Name</label>
          <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor=''>Last Name</label>
          <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <button onSubmit>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
