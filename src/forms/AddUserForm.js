import React, { useState } from 'react';

const AddUserForm = props => {
  const initalFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initalFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!user.name || !user.username) return;

    props.addUser(user);
    setUser(initalFormState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  );
}

export default AddUserForm;