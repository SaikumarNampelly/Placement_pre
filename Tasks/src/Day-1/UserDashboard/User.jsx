import React, { useState } from "react";
import UserCard from "./UserCard";

const UserDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "chintu", role: "junior" },
    { id: 2, name: "santhu", role: "junior" },
    { id: 3, name: "saikumar", role: "junior" },
  ]);

  const handlePromote = (id) => {
    const updatedusers = users.map((user) =>
      user.id === id ? { ...user, role: "senior" } : user
    );
    setUsers(updatedusers);
    alert(`${name} promoted to senior`)
  };
  return (
    <div>
      <h1>User Dashboard</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
          onpromote={() => handlePromote(user.id)}
        />
      ))}
    </div>
  );
};

export default UserDashboard;
