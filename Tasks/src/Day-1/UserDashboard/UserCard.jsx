import React from 'react'

const UserCard = ({name,role,onpromote}) => {
  return (
    <div>
        <h1>User Card</h1>
        <h3>{name}</h3>
        <p>{role}</p>
        <button onClick={onpromote}>Promote</button>
    </div>
  )
}

export default UserCard