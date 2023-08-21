import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectUserData } from 'redux/selectors';


const RequereAuth = ({children}) => {
    const location = useLocation();
    const auth = useSelector(selectUserData);
    if (!auth) return <Navigate to='/login' state={{ from: location }} />
    return children
}
export default RequereAuth;