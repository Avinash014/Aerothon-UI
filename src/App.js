import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import UserList from "./UserList.js";
import AdminList from "./AdminList.js";
import ComponentList from "./ComponentList.js";
import FabricationList from "./fabrication.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/admin" element={<AdminList />} />
        <Route path="/fabrication" element={<FabricationList />} />
        <Route path="/component" element={<ComponentList />} />
      </Routes>
    </Router>
  );
}

export default App;
