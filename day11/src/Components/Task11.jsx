import React, { useState, useEffect } from 'react';

const SearchFilter = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
  ]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div>
        <h2>Task-11</h2>
      <input
        type="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;