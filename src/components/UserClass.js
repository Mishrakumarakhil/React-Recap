import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count-{this.state.count}</h1>
        <div>Name:{this.props.name}</div>
        <div>location:Bangalore</div>
        <div>Contact:akhil184</div>
      </div>
    );
  }
}
export default UserClass;
