import { createBrowserRouter } from "react-router-dom";
import NewApp from "./NewApp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NewApp/>
    }
])

export default router;