import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Engineer");
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
          <div className="flex flex-wrap">
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            />
            <Employee
              name="Cliff"
              role="Sr. Engineer"
              img="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            />
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            />
            <Employee
              name="Cliff"
              role="Sr. Engineer"
              img="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            />
          </div>
        </>
      ) : (
        <h1>No employees to show</h1>
      )}
    </div>
  );
}

export default App;
