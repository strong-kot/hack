import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function GuestRoute({ children, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));

  if(auth.user && auth.user.is_staff==false){
    return <Navigate to={url.get("redirect") || "/posts"}/>
  }else if(auth.user && auth.user.is_staff==true){
    return <Navigate to={url.get("redirect") || "/admin"}/>
  }else {return children}


}

export default GuestRoute;
