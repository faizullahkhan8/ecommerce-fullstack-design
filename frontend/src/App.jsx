import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./Layout/BaseLayout";
import HomePage from "./Pages/HomePage";

const App = createBrowserRouter([
    {
        path: "",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);

export default App;
