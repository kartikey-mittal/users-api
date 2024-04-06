import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
        // Filter users starting from ID 10
        const filteredData = response.data.filter(user => parseInt(user.id) >= 10);
        setUsers(filteredData);
        setFilteredUsers(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredData = users.filter(user => {
      return user.profile.firstName.toLowerCase().includes(searchTerm) || 
             user.profile.lastName.toLowerCase().includes(searchTerm);
    });
    // Prioritize search results by name
    const sortedData = filteredData.sort((a, b) => {
      const aFirstName = a.profile.firstName.toLowerCase();
      const bFirstName = b.profile.firstName.toLowerCase();
      const aLastName = a.profile.lastName.toLowerCase();
      const bLastName = b.profile.lastName.toLowerCase();
      
      if (aFirstName.startsWith(searchTerm) && !bFirstName.startsWith(searchTerm)) return -1;
      if (!aFirstName.startsWith(searchTerm) && bFirstName.startsWith(searchTerm)) return 1;
      if (aLastName.startsWith(searchTerm) && !bLastName.startsWith(searchTerm)) return -1;
      if (!aLastName.startsWith(searchTerm) && bLastName.startsWith(searchTerm)) return 1;
      return 0;
    });
    setFilteredUsers(sortedData);
  };

  return (
    <div>
      <h1>User List</h1>
      <input 
        type="text" 
        placeholder="Search by name..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <div>
              <img src={user.avatar} alt="Avatar" />
              <div>
                <p>Name: {user.profile.firstName} {user.profile.lastName}</p>
                <p>Email: {user.profile.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
