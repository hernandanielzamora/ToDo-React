/* eslint-disable import/no-extraneous-dependencies */
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  if (!user) {
    return (
      <>
        <Navigate
          to="/login"
          state={{ pathname: location.pathname }}
          replace
        />
      </>
    );
  }
  return children;
};
export default ProtectedRoute;
