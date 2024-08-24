import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  if (isLoggedIn) {
    return children;
  }
  return (
    <Navigate to={"/Log"} replace state={{ previousPath: location.pathname }} />
  );
}

export default RequireAuth;
