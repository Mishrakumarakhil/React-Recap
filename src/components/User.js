import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count-{count}</h1>
      <div>Name:{name}</div>
      <div>location:Bangalore</div>
      <div>Contact:akhil184</div>
    </div>
  );
};

export default User;
