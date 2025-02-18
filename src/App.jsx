import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SrekjaBar from "./SrekjaBar/SrekjaBar.jsx";
import Register from "./Register";
import Reviews from "./SrekjaBar/Reviews/Reviews.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
    },
    {
        path: '/placeholder',
        element: <h1>Placeholder</h1>
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/srekjaBar',
        element: <SrekjaBar />
    },
    {
        path:'/reviews',
        element:<Reviews/>
    }
    // {
//  path: '/{ime na komponenta}
//  element: <Ime na komponentata />
// }
])

function App() {

    return (
        <RouterProvider router={router} />
    )
}

export default App