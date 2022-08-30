import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function PrivateRoute({ children }) {
  const auth = useAuth();
  const url = new URLSearchParams();

  return (auth.user && auth.user.is_staff==false) ? (
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

export default PrivateRoute;
