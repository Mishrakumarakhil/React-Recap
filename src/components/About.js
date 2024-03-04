import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Page</h1>
        <p>We are in About page</p>
        {/* <User name={"Akhil - function"} /> */}
        <UserClass name={"Akhil - class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>We are in About page</p>
//       {/* <User name={"Akhil - function"} /> */}
//       <UserClass name={"Akhil - class"} />
//     </div>
//   );
// };

export default About;
