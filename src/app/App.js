import React, { useState } from 'react';
import UserTable from '../tables/UserTable';
import AddUserForm from '../forms/AddUserForm';
import './App.css';

const App = () => {
  const usersData = [
    { id: 1, name: 'Duke', username: 'Sir Duke' },
    { id: 2, name: 'Bono', username: 'In the name of love' },
    { id: 3, name: 'King', username: 'BIS' }
  ];

  const [users, setUsers] = useState(usersData);
  const [index, setIndex] = useState(4);

  const addUser = user => {
    setIndex(index + 1);
    user.id = index;
    setUsers([ ...users, user ]);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks Demo</h1>
      </header>

      <main>
        <div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>

        <div>
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </main>

      <footer>
        End of the demo
      </footer>
    </div>
  );
}

export default App;
