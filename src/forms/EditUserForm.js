import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const { currentUser, updateUser, setEditing } = props;

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(user.id, user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
}

export default EditUserForm;