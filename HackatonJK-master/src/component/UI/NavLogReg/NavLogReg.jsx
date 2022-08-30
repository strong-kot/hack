import React from 'react'
import classes from './NavLogReg.module.css'
import {Container, Nav, Navbar, } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
const NavLogReg = () => {

    return (

            <Container >
                <div className={classes.navigation}>
                    <NavLink to="/login" className={({ isActive }) =>
                        isActive ? classes.navigate_active : classes.navigate_inactive} >Авторизация</NavLink>
                <NavLink to="/registration" className={({ isActive }) =>
                    isActive ? classes.navigate_active : classes.navigate_inactive}  >Регистрация</NavLink>
                </div>
            </Container>


    )
}

export default NavLogReg