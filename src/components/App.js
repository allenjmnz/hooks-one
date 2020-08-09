import React, { useState, useEffect } from 'react'
import usersArray from '../users.json'
import UserCard from './UserCard'
import Form from './Form'

const initialFormState = {
  name: "",
  jobTitle: "",
  age: "",
  bossID: "None"
}

function App() {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState(initialFormState)

  useEffect(() => {
    setUsers(
      usersArray.map(userItem => ({
        ...userItem,
        boss: userItem.bossID ? usersArray.find(x => x.id === userItem.bossID).name : null
      }))
    )
  }, [])

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    let formattedUser = {
      id: users.length + 1,
      ...newUser,
      age: parseInt(newUser.age),
      bossID: newUser.bossID === "None" ? null : parseInt(newUser.bossID)
    }

    formattedUser = {
      ...formattedUser,
      boss: formattedUser.bossID ? users.find(x => x.id === formattedUser.bossID).name : null
    }

    setUsers([
      ...users,
      formattedUser
    ])
    setNewUser(initialFormState)
  }

  return (
    <div className="app">
      <h1>PSL Family</h1>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
      <h2>Register new user</h2>
      <Form
        users={users}
        newUser={newUser}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
