import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/Title.png';

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img
                        src="../assets/Title.png"
                        width="30"
                        height="30"
                        className="align-top"
                        alt="Marriage Story logo"
                    /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#client">Client</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Hello, <a href="#login">Dhimas</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;