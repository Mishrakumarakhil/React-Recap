import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Mishrakumarakhil");
    const jsonData = await data.json();

    this.setState({ userInfo: jsonData });
    console.log("child Mount", jsonData);
  }
  render() {
    // debugger;
    console.log("Child Render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <div>Name:{this.state.userInfo.name}</div>
        <div>location:{this.state.userInfo.location}</div>
        <div>Contact:akhil184</div>
      </div>
    );
  }
}
export default UserClass;
