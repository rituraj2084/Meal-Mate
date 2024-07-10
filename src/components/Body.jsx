import { useState, useEffect, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { RESTAURANT_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const isOnline = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(userContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!isOnline) {
    return (
      <h1>
        It seems there is some internet issue. Please check your internet
        connection and try again
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="flex mb-4 justify-center">
        <div className="flex">
          <input
            type="text"
            className="border border-solid border-black rounded focus:outline"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="mx-1 bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 mx-4 rounded"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div>
          <label htmlFor="">Username: </label>
          <input
            type="text"
            className="border border-solid border-black rounded focus:outline"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={'/restaurants/' + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
