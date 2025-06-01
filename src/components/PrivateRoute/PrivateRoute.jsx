import { Navigate, useLocation } from 'react-router';

// Dummy auth checker (replace with actual logic)
const isAuthenticated = () => {
  return !!localStorage.getItem('user'); // or use context/auth hook
};

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
