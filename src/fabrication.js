import React, { useEffect, useState } from "react";
import axios from "axios";
import mockData from "./data/admins.json";

function FabricationList() {
  const [users, setUsers] = useState([]);
  const [mockUsers, setMockUsers] = useState([]);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/fabrications/",
    headers: {},
  };

  function getData() {
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setMockUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await Promise.resolve({ data: mockData });
  //         setMockUsers(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);

  useEffect(() => {
    getData();
  }, []);
  //   useEffect(() => {
  //     console.info(users);
  //   }, [users]);

  return (
    <>
      <p>Users</p>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <ul>
        {mockUsers.map((user) => (
          <li key={user.itemId}>
            <p>{user.itemId}</p>
            <p>{user.item}</p>
            <p>{user.quantity}</p>
            <p>{user.quantity}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default FabricationList;
