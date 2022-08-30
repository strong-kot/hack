import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";
import Posts from "../../pages/Main/Posts";
import Recomendations from "../../pages/Main/Recomendations";
import Company from "../../pages/Main/Company";
import Home3 from "../../pages/Home/index3";
import Home4 from "../../pages/Home/index4";
import Home5 from "../../pages/Home/index5";
import Home2 from "../../pages/Home/index2";
import Home6 from "../../pages/Home/index6";
import Admin from "../../pages/Admin/Admin";
import AdminRoute from "../components/AdminRoute";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Routes>

      <Route path="/" element={
          <GuestRoute>
              <Home />
          </GuestRoute>

      } />
        <Route path="/2" element={
            <GuestRoute>
                <Home2 />
            </GuestRoute>

        } />
        <Route path="/3" element={
            <GuestRoute>
                <Home3 />
            </GuestRoute>

        } />
        <Route path="/4" element={
            <GuestRoute>
                <Home4 />
            </GuestRoute>

        } />
        <Route path="/5" element={
            <GuestRoute>
                <Home5 />
            </GuestRoute>

        } />
        <Route path="/6" element={
            <GuestRoute>
                <Home6 />
            </GuestRoute>

        } />

        <Route path="/admin" element={

            <AdminRoute>
                <Admin />
            </AdminRoute>

        } />
        <Route
            path="/posts"
            element={
                <PrivateRoute>
                    <Posts/>
                </PrivateRoute>
            }
        />
        <Route
            exact="true"
            path="/recomendation"
            element={
                <PrivateRoute>
                    <Recomendations/>
                </PrivateRoute>
            }

        />
        <Route
            exact="true"
            path="/recomendation/:id"
            element={
                <PrivateRoute>
                    <Company/>
                </PrivateRoute>
            }

        />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />

      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppRoutes;
