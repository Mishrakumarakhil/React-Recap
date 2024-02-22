import RestroCard from "./RestroCard";
import { restroObj } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/* //restrocard */}
        {restroObj.map((ele, index) => (
          <RestroCard restroData={ele} key={ele.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
