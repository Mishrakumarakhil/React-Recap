import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
  const { restroData } = props;
  console.log(restroData);
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-img"
        src={CDN_URL + restroData.info?.cloudinaryImageId}
        alt="restro-logo
        "
      />

      <h3>{restroData.info.name}</h3>
      <h4>{restroData.info.cuisines.join(" , ")}</h4>
      <h4>{restroData.info.avgRating} stars</h4>
      <h4> {restroData.info.costForTwo / 100} Cost for two</h4>
      <h4> {restroData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestroCard;
