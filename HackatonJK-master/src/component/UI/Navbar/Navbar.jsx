import React from 'react'
import classes from './Navbar.module.css'
import {Container, Nav, Navbar, } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
const Navibar = () => {

    return (

            <Container >
                <div className={classes.navigation}>
                    <NavLink to="/posts" className={({ isActive }) =>
                        isActive ? classes.navigate_active : classes.navigate_inactive} >Собственность</NavLink>
                <NavLink to="/recomendation" className={({ isActive }) =>
                    isActive ? classes.navigate_active : classes.navigate_inactive}  >Рекомендации</NavLink>
                </div>
            </Container>


    )
}

export default Navibar