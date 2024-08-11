import "./index.css";
import Employee from "./components/Employee";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Engineer");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Intern",
      img: "https://images.pexels.com/photos/3768689/pexels-photo-3768689.jpeg",
    },
    {
      name: "Franklin",
      role: "Analyst",
      img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg",
    },
    {
      name: "Abby",
      role: "UX UI Designer",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
    {
      name: "Cliff",
      role: "Sr. Engineer",
      img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    },
    {
      name: "Tio",
      role: "Jr. Software Engineer",
      img: "https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg",
    },
    {
      name: "Tania",
      role: "Sr. Data Architect",
      img: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg",
    },
  ]);

  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h1>No employees to show</h1>
      )}
    </div>
  );
}

export default App;
