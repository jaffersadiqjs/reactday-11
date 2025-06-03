import React, { useState, useEffect } from 'react';

const ConditionalFetch = () => {
  const [users, setUsers] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (fetchData) {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      };

      fetchUsers();
    }
  }, [fetchData]);

  return (
    <div>
        <h2>Task-8</h2>
      <button onClick={() => setFetchData(true)}>Fetch Data</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionalFetch;