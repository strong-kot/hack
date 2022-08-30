import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import React, { useCallback, useEffect, useState } from "react";
import cl from "./Profile.module.css"
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Profile() {
  const classes = useStyles();
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();

  function onLogOut(e){
    e.preventDefault();
    auth.logOut();
    nav("/login");
  };


  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: user } = await api.auth.updateProfile(data);

      auth.setUser(user);
      setIsOpen(true);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = useCallback(async () => {
    const { data } = await api.auth.getProfile();

    reset({
      firstName: data.username,
      lastName: data.lastName,
    });
  }, [reset]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Обновить профиль</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.firstName?.message)}
                  fullWidth={true}
                  label="First name"
                  variant="filled"
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>


          <Grid item xs={12}>
            <div className={cl.container_but}>
            <button
             className={cl.buttonUpdate}
              type="submit"
              disabled={isLoading}
            >
              Обновить
            </button>
            <button className={cl.buttonLogout} onClick={onLogOut}>
              Выйти
            </button>
            </div>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message="Profile updated successfully"
      />
    </Container>
  );
}

export default Profile;
