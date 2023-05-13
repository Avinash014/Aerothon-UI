import React, { useEffect, useState } from "react";
import axios from "axios";
// import mockData from "./data/admins.json";
import "./Fabrication.css";

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
      <p>Item</p>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Incoming Date</th>
            <th>Outgoing Date</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.itemId}>
              <td>{user.itemId}</td>
              <td>{user.item}</td>
              <td>{user.quantity}</td>
              <td>{user.inDate}</td>
              <td>{user.outDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul>
        {mockUsers.map((user) => (
          <li key={user.itemId}>
            <p>{user.itemId}</p>
            <p>{user.item}</p>
            <p>{user.quantity}</p>
            <p>{user.quantity}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}
export default FabricationList;
