import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleCLearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center m-5 p-5 ">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-3 bg-black text-white rounded-lg"
            onClick={handleCLearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
