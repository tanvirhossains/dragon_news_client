import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import LeftSideNav from './LeftSideNav';

const Header = () => {
    return (
        <div>
            <Navbar bg="secondary text-white" expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                            {/* ------------All news link in the small device  */}
                            <div className='d-lg-none d-md-block  d-sm-block '>
                                <LeftSideNav className='text-white'></LeftSideNav>
                            </div>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item className='text-' href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className='text-' href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item className='text-' href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='text-' href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;