import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count-{count}</h1>
      <h1>Count2-{count2}</h1>
      <div>Name:{name}</div>
      <div>location:Bangalore</div>
      <div>Contact:akhil184</div>
    </div>
  );
};

export default User;
