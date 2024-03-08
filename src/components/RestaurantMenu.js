import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaturantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  let category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (ele) =>
        ele.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("helllo", category);
  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {category.map((ele) => (
        <RestaurantCategory data={ele.card.card} />
      ))}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards ? (
          itemCards.map((ele) => {
            return <li key={ele.card.info.id}>{ele.card.info.name}</li>;
          })
        ) : (
          <div>Ooops !! Data not found!</div>
        )}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
