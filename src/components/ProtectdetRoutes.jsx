import { Navigate } from "react-router-dom";

function ProtectdetRoutes({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectdetRoutes;
