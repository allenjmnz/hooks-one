import React from 'react'
import PropTypes from 'prop-types'


function UserCard(props) {
  return (
    <div className="user-card">
      <h3>{props.name} - <span className="age">{props.age}</span></h3>
      <p>{props.jobTitle}</p>
      {props.boss ? <p>Direct Boss - {props.boss}</p> : <p className="dimmed">Doesn't have a direct boss</p>}
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
  boss: PropTypes.any
}

export default UserCard
