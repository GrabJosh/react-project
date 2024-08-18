import "../index.css";
import Employee from "../components/Employee";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";

function Employees() {
  const [role, setRole] = useState("Engineer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Intern",
      img: "https://images.pexels.com/photos/3768689/pexels-photo-3768689.jpeg",
    },
    {
      id: 2,
      name: "Franklin",
      role: "Analyst",
      img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg",
    },
    {
      id: 3,
      name: "Abby",
      role: "UX UI Designer",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
    {
      id: 4,
      name: "Cliff",
      role: "Sr. Engineer",
      img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    },
    {
      id: 5,
      name: "Tio",
      role: "Jr. Software Engineer",
      img: "https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg",
    },
    {
      id: 6,
      name: "Tania",
      role: "Sr. Data Architect",
      img: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return {
          ...employee,
          name: newName,
          role: newRole,
        };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function NewEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-100 min-h-screen">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={NewEmployee} />
        </>
      ) : (
        <h1>No employees to show</h1>
      )}
    </div>
  );
}

export default Employees;
