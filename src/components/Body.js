import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let url =
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.8989308&lng=77.65862349999999&str=biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=dd7927d1-f65e-7214-d1a3-bcdb77d7edc7&selectedPLTab=RESTAURANT";
    let data = await fetch(url);
    let jsonData = await data.json();
    setDisplayData(
      jsonData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  const handleRestaurantList = () => {
    let list = displayData.filter((ele) => ele.card.card.info.avgRating > 4.2);
    setDisplayData(list);
  };
  // if (displayData.length === 0) {
  //   return <Shimmer />;
  // }
  return displayData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button onClick={handleRestaurantList}>Top Rated Restaurant</button>
      </div>
      <div className="restro-container">
        {/* //restrocard */}
        {displayData.map((ele, index) => (
          <RestroCard restroData={ele} key={ele?.card?.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
