import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2 relative">
            <button
              className="py-2 px-4 absolute bottom-0 left-14 bg-white hover:bg-gray-200 cursor-pointer shadow-lg rounded-lg"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
            <img src={CDN_URL + item.card.info.imageId} className="w-[100%]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
