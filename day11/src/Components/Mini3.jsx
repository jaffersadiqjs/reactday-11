import React, { useState, useEffect } from 'react';

const ToggleApiData = () => {
  const [users, setUsers] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (showData) {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      };

      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [showData]);

  return (
    <div>
         <h2>Mini-project-3</h2>
      <button onClick={() => setShowData(!showData)}>
        {showData ? 'Hide Data' : 'Show Data'}
      </button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleApiData;