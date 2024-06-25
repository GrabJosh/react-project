import "./App.css";
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
          <Employee name="Caleb" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="Cliff" role="Sr. Engineer" />
          <Employee name="Tori" />
        </>
      ) : (
        <h1>No employees to show</h1>
      )}
    </div>
  );
}

export default App;
