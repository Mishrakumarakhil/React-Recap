import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((ele) => (
        <div
          key={ele.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              {" "}
              <span>{ele.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {ele.card.info.price
                  ? ele.card.info.price / 100
                  : ele.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs"> {ele.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-black text-white shadow-lg  p-2 mx-16 rounded-lg ">
                Add +
              </button>
            </div>
            <img src={CDN_URL + ele.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
