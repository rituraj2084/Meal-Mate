import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const onlineSatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex items-center justify-between px-8 mb-4 bg-gray-100 shadow-lg">
      <div>
        <img src={LOGO_URL} alt="logo" className="w-40" />
      </div>
      <div className="navbar">
        <ul className="flex gap-2">
          <li>Online Satus: {onlineSatus ? '🟢' : '🔴'} </li>
          <li className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded">
            <Link to="/about">About Us</Link>
          </li>
          <li className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => {
              loginBtn === 'Login'
                ? setLoginBtn('Logout')
                : setLoginBtn('Login');
            }}
          >
            {loginBtn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
