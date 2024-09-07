import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/userContext'; // Assuming you have an Auth context that provides currentUser

const PrivateRoute = ({ children }: any) => {
    const { currentUser } = useAuth();


    if (!currentUser) {
        return <Navigate to="/" />;
    }


    return children;
};

export default PrivateRoute;
