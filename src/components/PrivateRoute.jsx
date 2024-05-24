import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function PrivateRoute(element) {
    const user = useSelector(state => state.user);

    if (!user) {
        return <Navigate to='/login' />;
    }

    return element;
}