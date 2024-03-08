const RestaurantCategory = ({ data }) => {
  console.log("data", data);
  return (
    <>
      {/* Accordian Header */}
      <div className="w-6/12 shadow-lg p-4 bg-gray-50 mx-auto my-4 flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length}){" "}
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordian Body */}
    </>
  );
};

export default RestaurantCategory;
