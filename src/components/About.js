import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>We are in About page</p>
      {/* <User name={"Akhil - function"} /> */}
      <UserClass name={"Akhil - class"} />
    </div>
  );
};

export default About;
