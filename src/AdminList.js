import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mockData from './data/admins.json';



 function AdminList() {
  const [users, setUsers] = useState([]);
  const [mockUsers, setMockUsers] = useState([]);

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/users/',
      headers: { }
    };


  function getData(){
   axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await Promise.resolve({ data: mockData });
          setMockUsers(response.data.admins);
        } catch (error) {
          console.error(error);
        }
      };

      fetchUsers();
    }, []);

  useEffect(() => {
    getData();
  }, []);
  useEffect(()=>{
  console.info(users);
  },[users])

  return (
  <>
  <p>Users</p>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <ul>
          {mockUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
    </>
  );
}
export default AdminList;