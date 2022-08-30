import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function AdminRoute({ children }) {
  const auth = useAuth();
  const url = new URLSearchParams();
  return (auth.user.is_staff==true) ? (
      children
  ) : (
      <Navigate
          to={{
            pathname: "/login",
            search: url.toString(),
          }}
      />
  );
}

export default AdminRoute;
