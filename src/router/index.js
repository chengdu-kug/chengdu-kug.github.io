import Advance from '../pages/advance'
import Events from '../pages/events'
import {Navigate} from "react-router-dom";

function getPath(path) {
    return process.env.NODE_ENV === 'development' ? path : process.env.PUBLIC_URL + path
}
const routes = [
    {
        path: getPath('/'),
        element: <Navigate to="main/"/>
    },
    {
        path: getPath('/advance'),
        element: <Advance/>
    },
    {
        path: getPath('/events'),
        element: <Events/>
    }
]
export default routes
