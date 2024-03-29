import { CDN_URL } from "../utils/constant";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

const RestroCard = (props) => {
  let { restroData } = props;
  restroData = restroData?.card?.card ? restroData.card.card : restroData;

  return (
    <div
      className="restro-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={styleCard}
    >
      <img
        className="restro-img rounded-lg"
        src={CDN_URL + restroData.info?.cloudinaryImageId}
        alt="restro-logo
        "
      />

      <h3 className="font-bold py-2 text-lg">{restroData.info.name}</h3>
      <h4>{restroData.info.cuisines.join(" , ")}</h4>
      <h4>{restroData.info.avgRating} stars</h4>
      <h4> {restroData.info.costForTwo / 100} Cost for two</h4>
      <h4> {restroData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedRestroCard = (RestroCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black m-4 p-2 rounded-sm text-white">
          Promoted
        </label>
        <RestroCard {...props} />
      </>
    );
  };
};

export default RestroCard;
