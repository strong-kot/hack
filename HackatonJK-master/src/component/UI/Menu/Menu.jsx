import { Link} from "react-router-dom";
import cl from './Menu.module.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Nav, Navbar,} from 'react-bootstrap'
import useAuth from "../../../hooks/useAuth";
import Routes from "../../../routes/Routes";
import logo from './Icons/logo.png'
import profile from './Icons/profile.png'
const Menu = () => {
    const auth = useAuth();
    return (
        <div>
                        {auth.isLoaded &&
                            (auth.user && (auth.user.is_staff==false)  ? (
                                <>
                                    <Navbar  collapseOnSelect expand="md" bg="light">
                                        <Container>
                                            <Navbar.Brand><img style={{width:'260px',height:'104px'}} alt="logo" src={logo}/></Navbar.Brand>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav" >
                                    <Nav>
                                        <Nav.Link><Link className={cl.navigate}  to="/posts">
                                            Главная
                                        </Link></Nav.Link>

                                    </Nav>

                                    <Navbar.Collapse className="justify-content-end">
                                        <Nav>
                                            <Nav.Link><Link className={cl.navigate}  to="/profile">
                                                <img style={{width:'50px',height:'50px'}} alt="profile" src={profile}/>
                                            </Link></Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar.Collapse>
                            </Container>
                            </Navbar>
                                </>
                            ) : (
                                <>

                                </>
                            ))}


            <Routes />
        </div>

    )
}

export default Menu