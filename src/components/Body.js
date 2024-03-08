import RestroCard, { withPromotedRestroCard } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [displayData, setDisplayData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const PromotedResto = withPromotedRestroCard(RestroCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

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
    setFilterData(
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

  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus", onlineStatus);
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline, Please check your internet connection</h1>
    );
  }
  return displayData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            className="border border-solid border-black"
            type="text"
            placeholder="search box"
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Updated restro list and update UI

              const filterdList = displayData.filter((ele) =>
                ele.card?.card.info.name
                  .toLocaleLowerCase()
                  .includes(searchtext.toLocaleLowerCase())
              );

              setFilterData(filterdList);
            }}
          >
            submit
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-red-100 rounded-lg"
            onClick={handleRestaurantList}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <spna>User Name</spna>
          <input
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="restro-container flex flex-wrap">
        {/* //restrocard */}
        {filterData.map((ele, index) => (
          <Link
            key={ele?.card?.card.info.id}
            to={"/restaurants/" + ele?.card?.card.info.id}
          >
            {" "}
            {ele?.card?.card.info?.promoted ? (
              <PromotedResto restroData={ele} />
            ) : (
              <RestroCard restroData={ele} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
