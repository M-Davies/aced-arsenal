import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import Ace from '../images/ace.png'
import Github from '../images/github.png'
import { Container } from 'react-bootstrap';

export default function PageNavbar () {
    return (
        <Container>
            <Navbar fixed="top" expand="lg"  variant="dark" bg="dark" className="container-fluid">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Ace}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ACED ARSENAL
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link target="_blank" href="https://github.com/shadowedlucario/aced-arsenal">
                            <img
                                alt=""
                                src={Github}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}