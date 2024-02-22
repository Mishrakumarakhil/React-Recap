import RestroCard from "./RestroCard";
import { restroObj } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [displayData, setDisplayData] = useState(restroObj);

  const handleRestaurantList = () => {
    let list = displayData.filter((ele) => ele.info.avgRating > 4.2);
    setDisplayData(list);
  };
  return (
    <div className="body">
      <div className="filter">
        <button onClick={handleRestaurantList}>Top Rated Restaurant</button>
      </div>
      <div className="restro-container">
        {/* //restrocard */}
        {displayData.map((ele, index) => (
          <RestroCard restroData={ele} key={ele.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
