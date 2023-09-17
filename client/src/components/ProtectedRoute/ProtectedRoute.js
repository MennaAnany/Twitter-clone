import { useUserStore } from "../../UserStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = useUserStore((state) => state.user.email);
  return currentUser ? <>{children}</> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
