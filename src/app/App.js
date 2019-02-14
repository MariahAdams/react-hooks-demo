import React, { useState } from 'react';
import UserTable from '../tables/UserTable';
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';
import './App.css';

const App = () => {
  const usersData = [
    { id: 1, name: 'Duke', username: 'Sir Duke' },
    { id: 2, name: 'Bono', username: 'In the name of love' },
    { id: 3, name: 'King', username: 'BIS' }
  ];

  const initalFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(usersData);
  const [index, setIndex] = useState(4);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initalFormState);


  const addUser = user => {
    setIndex(index + 1);
    user.id = index;
    setUsers([ ...users, user ]);
  }

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  }

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks Demo</h1>
      </header>

      <main>
        <div>
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>

        <div>
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </main>

      <footer>
        End of the demo
      </footer>
    </div>
  );
}

export default App;
