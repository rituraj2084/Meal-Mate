import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import Error from './src/components/Error';
import Cart from './src/components/Cart';
import RestaurantMenu from './src/components/RestaurantMenu';
import userContext from './src/utils/userContext';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';

const About = lazy(() => import('./src/components/About'));
const AppLayout = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const data = {
      name: 'Rituraj',
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
