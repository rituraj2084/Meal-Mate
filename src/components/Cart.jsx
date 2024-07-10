import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-6 p-6">
      <h1 className="text-3xl font-bold">Cart Page</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-4 rounded cursor-pointer"
          onClick={handleClearItem}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-xl font-bold">
            Cart is empty. Please add items to the cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
