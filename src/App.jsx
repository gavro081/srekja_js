import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SrekjaBar from './SrekjaBar/SrekjaBar.jsx';
import Register from './UserManagement/Register.jsx';
import FoodInput from './AI/FoodInput.jsx';
import Home from './Home/Home.jsx';
import EShop from './E-Shop/mainEshopPage.jsx';
import TableReservation from './SrekjaBar/TableReservation.jsx';
import SingleProductPage from './E-Shop/singleProductPage.jsx';

import ShoppingCart from './E-Shop/shoppingCart.jsx';

import FilteredS from './E-Shop/filtered.jsx';
import StartUpsListings from './StartUps1/startUpsListings.jsx';
import Reviews from './SrekjaBar/Reviews/Reviews.jsx';
import Login from './UserManagement/Login.jsx';
import { useAuth } from './firebase/authContext.jsx';
import { useEffect } from 'react';
import Wheel from './UserManagement/SpinTheWheel/Wheel.jsx';

import Listings from './Listings.jsx';

import BlogInput from './AI/BlogInput.jsx';
import Media from './Media/Media.jsx';
import AIinput from './AI/AIinput.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/placeholder',
    element: <h1>Placeholder</h1>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/srekjaBar',
    element: <SrekjaBar />,
  },
  {
    path: '/testAI',
    element: <FoodInput />,
  },
  {
    path: '/mainEshopPage',
    element: <EShop />,
  },
  {
    path: '/srekjaBar/reservation',
    element: <TableReservation />,
  },
  {
    path: '/filtered',
    element: <FilteredS />,
  },
  {
    path: '/srekjaBar/reviews',
    element: <Reviews />,
  },
  {
    path: '/media',
    element: <Media />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/wheel',
    element: <Wheel />,
  },
  {
    path: '/singleProductPage',
    element: <SingleProductPage />,
  },
  {
    path: '/shoppingCart',
    element: <ShoppingCart />,
  },
  {
    path: '/startUpsListings',
    element: <StartUpsListings />,
  },
  // {
  //   path: '/blogai',
  //   element: <BlogInput />,
  // },
  {
    path: '/blogai',
    element: <BlogInput />,
  },
  {
    path: '/ai',
    element: <AIinput />,
  },
  {
    path: '/listings',
    element: <Listings />,
  },

  // {
  //  path: '/{ime na komponenta}
  //  element: <Ime na komponentata />
  // }
]);

function App() {
  // ova pravi na page refresh da se log outnuva user-ot avtomatski
  // ako se stavi log out kopce moze da se trgne do togas neka sedi
  // const { logout } = useAuth();
  // useEffect(() => {
  //   logout();
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
