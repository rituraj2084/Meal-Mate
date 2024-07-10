import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  return (
    <div className="w-[250px] p-2 m-2 shadow-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-name"
        className="h-52 w-[100%] rounded-lg"
      />
      <h3 className="font-bold py-2 line-clamp-1">{name}</h3>
      <h4 className="text-ellipsis min-h-12 line-clamp-2 overflow-y-hidden">
        {cuisines.join(', ')}
      </h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
