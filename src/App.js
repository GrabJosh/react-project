import "./index.css";
import Employee from "./components/Employee";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header"; // Corrected import path
import Employees from "./Pages/Employees";

function App() {
  return (
    <Header>
      <Employees />
      
    </Header>

  );
}
export default App;
