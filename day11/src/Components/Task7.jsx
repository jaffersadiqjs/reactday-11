import React, { useState, useEffect } from 'react';

const DataFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <>
    <h2>Task-7</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
};

export default DataFetch;
