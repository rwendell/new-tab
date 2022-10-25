import App from "App";
import { One } from "pages/One";
import { Three } from "pages/Three";
import { Two } from "pages/Two";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "1",
                element: <One />

            },
            {
                path: "2",
                element: <Two />
            },
            {
                path: "3",
                element: <Three />
            }]
    }
])

export { router };