import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

/* import useAuth from "../../../Hooks/useAuth"

export default function PrivateRoute({ children }) {

    const { user } = useAuth();
    console.log(user.email)

    return user.email ? children : <Navigate to="/login" />
} */

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

