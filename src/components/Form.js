import React from 'react'

function Form({ users, newUser, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-wrapper">
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            id="name"
            value={newUser.name}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={newUser.jobTitle}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={newUser.age}
            onChange={onChange}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="bossID">Direct Boss</label>
          <select name="bossID" id="bossID" value={newUser.bossID} onChange={onChange}>
            <option value="None">Has no direct boss</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="button-wrapper">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form
