
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

;

const Private = ({ children }) => {
    const isLoggedIn = useAuth();


    return isLoggedIn ? children : <Navigate to={ '/' } />

};

export default Private;
