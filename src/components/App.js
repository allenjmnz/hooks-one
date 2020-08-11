import React, { useState, useEffect } from 'react'

// Array containing the initial value of "users" state variable
import usersArray from '../users.json'

// Components needed for this project
import UserCard from './UserCard'
import Form from './Form'

// Initial state to pass to the "newUser" state variable
const initialFormState = {
  name: "",
  jobTitle: "",
  age: "",
  bossID: "None"
}

// Stateful component
function App() {
  // This is the initial state for the users array, you need to update this state inside the useEffect hook
  const [users, setUsers] = useState([])

  // This is the initial state for the form values
  const [newUser, setNewUser] = useState(initialFormState)

  // Here you need to update the state for the "users" state variable.
  // Also, we need to add the "boss" property to each object inside the array.
  // The "boss" property must contain the name of the boss.
  // To get the name of the boss we use the "bossID" property inside each object.
  // If the "bossID" is equal to null, then the "boss" property should also be equal to null.
  useEffect(() => {
    
  }, [])

  // Here we need to update the "newUser" object with the values gotten from the Form component
  const handleChange = e => {
    
  }

  // Here we need to add the new user to the "users" state array.
  // Before adding the "newUser" object to the "users" array, we need to make sure that:
  //    - age is converted to number type
  //    - bossID is converted to number type. In case the user selects "None" in the <select> element, you need to make the value equal to null.
  // After that, you need to add a "boss" property similar to what you did inside the useEffect hook.
  // Once you have done all that, then you can proceed to add the new user to the "users" state array and restart the "newUser" object to its original value (using "setNewUser" and "initialFormState")

  // Important: You need to create a new "id" for the new user object, use any method you want to generate this ID.
  // Tip: You can use the users array length and add 1 to generate a new id. Not perfect but works for this exercise.
  const handleSubmit = e => {
    
  }

  return (
    <div className="app">
      <h1>PSL Family</h1>
      {/* Loop through users array and display the <UserCard /> on each iteration. */}
      {/* Tip #1: You can use the spread operator (...) when passing an object as prop */}
      {/* Tip #2: You can use the user.id property as the key attribute inside the loop */}

      {/* Suggested props: the "user object" using the spread operator */}

      {users.map(user => (
        <UserCard />
      ))}
      
      <h2>Register new user</h2>
      {/* Suggested props: 
        1. Users Array 
        2. An object representing the empty form
        3. onChange handler
        4. onSubmit handler */}

      <Form />
    </div>
  )
}

export default App
