import React, { useState, useEffect } from 'react';

function GitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []); //empty array because we only run once

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.login}</h3>
        </div>
      ))}
    </div>
  );
}

export default GitHubUsers;