import { useState } from "react"

function App() {
    
  const [person, setPerson] = useState({
        name: "Aagam",
        age: 18
    });

  function updatePerson(obj) {
     return {
        ...obj,
        name: "Rahul",
        age: obj.age + 1
      };
    }


  function handleClick() {
      const updated = updatePerson(person);
      setPerson(updated);
    }

  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleClick}>Update Details</button>
    </div>
  )
}

export default App
