import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";

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
        path: '/login',
        element: <Login />
    },
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