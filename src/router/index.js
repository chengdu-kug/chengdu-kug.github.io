import Advance from '../pages/advance'
import Events from '../pages/events'
import {Navigate} from "react-router-dom";

const routes = [
    {
        path: '/',
        element: <Navigate to="main/"/>
    },
    {
        path: '/advance',
        element: <Advance/>
    },
    {
        path: '/events',
        element: <Events/>
    }
]
export default routes
