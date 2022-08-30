import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavLogReg from "../../component/UI/NavLogReg/NavLogReg";
import logo from "../../component/UI/Menu/Icons/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  but: {
    background: '#255ba3',
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
}));

function Registration() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await api.auth.registration(data);
      const { data: loginData } = await api.auth.login(data);
      auth.setToken(loginData.access);
      auth.setRefreshToken(loginData.refresh)
      const { data: userData } = await api.auth.getProfile();
      auth.setUser(userData);
    } catch (e) {
      if (e.response.status) {
        console.log(e.response.status)
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <img alt="logo" src={logo}/>
      <NavLogReg/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Создать новый аккаунт</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.username?.message)}
                  fullWidth={true}
                  label="Логин"
                  variant="filled"
                  helperText={errors.username?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.password?.message)}
                  type="password"
                  fullWidth={true}
                  label="Пароль"
                  variant="filled"
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              className={classes.but}
            >
              Зарегестрироваться
            </Button>
            <Button
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/login"
            >
              Уже есть аккаунт?
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Registration;
