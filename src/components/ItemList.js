const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <>
      {items.map((ele) => (
        <div
          key={ele.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left"
        >
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
      ))}
    </>
  );
};

export default ItemList;
