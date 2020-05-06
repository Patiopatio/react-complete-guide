import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { name: "Max", age: 28 },
    { name: "Manu", age: 25 },
    { name: "Steve", age: 30 }
  ]);

  const switchNameHandler = () => {
    setPersons([
      { name: "Tom", age: 28 },
      { name: "Manu", age: 25 },
      { name: "Steve", age: 30 }
    ]);
  };

  return (
    <div className="App">
      <Person name={persons[0].name} age="25" hobby="petting kittens">
        My hobbies are:
      </Person>
      <Person name={persons[1].name} age={persons[1].age} />
      <Person name={persons[2].name} age={persons[2].age} />
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
}

export default App;
