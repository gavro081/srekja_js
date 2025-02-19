import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SrekjaBar from "./SrekjaBar/SrekjaBar.jsx";
import Register from "./Register";
import GPTtester from "./AI/GPTtester";
import Home from "./Home/Home.jsx";
import EShop from './E-Shop/mainEshopPage.jsx';
import TableReservation from "./SrekjaBar/TableReservation.jsx";


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
    element: <Register/>,
  },
  {
    path: '/srekjaBar',
    element: <SrekjaBar />,
  },
  {
    path: '/testAI',
    element: <GPTtester />,
  },
  {
    path: '/mainEshopPage',
    element: <EShop />,
  },
  {
    path: '/srekjaBar/rezerviraj',
    element: <TableReservation />
  }
  // {
  //  path: '/{ime na komponenta}
  //  element: <Ime na komponentata />
  // }
]);

function App() {

    return (
        <RouterProvider router={router} />
    )
}

export default App