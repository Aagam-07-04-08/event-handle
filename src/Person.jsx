import { useState } from "react";

function Person(){
    
    const [person,setPerson] = useState(
        {
            name:"Guest",
            age:0
        }
    )

    const [newName,setNewName] = useState("");
    const [newAge,setNewAge] = useState(0);

        function handleClick(){
            setPerson(
                {
                    ...person,
                    name: newName !== "" ? newName : person.name,
                    age: newAge !== "" ? newAge : person.age
                }
            )
        }

    return(
        <div className="container">
            <div className="person">
            <h2>Person Details</h2>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <label htmlFor="user">UserName: </label>
            <input type="text" onChange={(e) => setNewName(e.target.value)} id="user" placeholder="enter username"/>
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" onChange={(e) => setNewAge(e.target.value)} placeholder="enter age" id="age" />
            <br />
            <button onClick={handleClick}>Update Details</button>
            </div>
        </div>
    )
}

export default Person