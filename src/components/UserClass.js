import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <div>Name:{this.props.name}</div>
        <div>location:Bangalore</div>
        <div>Contact:akhil184</div>
      </div>
    );
  }
}
export default UserClass;
