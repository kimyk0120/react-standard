import {createBrowserRouter,} from "react-router-dom";
import App from "@/App";
import NotFoundPage from "@/components/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />
    },
    // {
    //     path: "/page1",
    //     element: <h1>Router</h1>,
    // },
    // {
    //     path: "/page2",
    //     element: <h1>Router</h1>,
    // },
]);

export default router
