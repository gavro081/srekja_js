import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
    },
    {
        path: '/placeholder',
        element: <h1>Placeholder</h1>
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