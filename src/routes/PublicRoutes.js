import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoutes = ({ children }) => {
  const isAuthenticated = Cookies.get('token')

  return isAuthenticated ? <Navigate to="/" /> :  children;
};

export default PublicRoutes;