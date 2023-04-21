import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Image, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import LeftSideNav from './LeftSideNav';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Model from '../LoginRegister/Model';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Log out!');
            }).catch((error) => {
                // An error happened.
            });
    }




    const [logInModal, setLogInModel] = useState(false);
    const [registerModal, setRegisterModal] = useState(false)


    const handleLoginShow = () => {
        setRegisterModal(false)
        setLogInModel(true)
        console.log(logInModal)
    };

    const handleLoginClose = () => {
        setLogInModel(false)
    };

    const handleRegisterShow = () => {
        setLogInModel(false)
        setRegisterModal(true)
    }
    const handleRegisterClose = () => {
        setRegisterModal(false)
    }

    const modalElement = { logInModal, setLogInModel, handleLoginShow, handleLoginClose, registerModal, setRegisterModal, handleRegisterClose, handleRegisterShow }

    return (
        <div>
            <Navbar bg="secondary text-white" expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="/">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                            {/* ------------All news link in the small device  */}
                            <div className='d-lg-none d-md-block  d-sm-block '>
                                <LeftSideNav className='text-white'></LeftSideNav>
                            </div>
                            <Toaster />.
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


                        {/* <Button class="btn btn-link" onClick={handleLoginShow}>
                            Login
                        </Button> */}
                        <Link to='/#login' class="btn btn-link" onClick={handleLoginShow}>
                            Login
                        </Link>
                        <Model
                            modalEle={modalElement}
                        // setLogInModel={setLogInModel}
                        // logInModal={logInModal}
                        // handleLoginShow={handleLoginShow}
                        ></Model>
                        {/* 
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            



                            <Form class="card-body " onSubmit={handleLogIn} className='a mx-auto w-full'>
                                <div class="form-control border-0">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <br />
                                    <input name='email' type="email" placeholder="email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <br />
                                    <input name="password" type="password" placeholder="password" class="input input-bordered" required />
                                    <br />
                                    <label class="label">
                                        <Link to="/register" class="label-text-alt link link-hover">Are You New?</Link>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Log in</button>
                                </div>
                            </Form>



                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal> */}




                        {
                            user ? <p onClick={handleSignOut}>Log Out</p> :
                                <>
                                    <Link to='/login' >Log In</Link>
                                    <span className='mx-2'>Resister</span>
                                </>
                        }
                        {user ? <p>{user?.displayName} {user?.email}</p> :

                            <>
                                <span></span>

                            </>

                        }


                        {user ? <Image style={{ height: "30px" }} src={user.photoURL
                        } roundedCircle /> : <p><FaUserAlt /></p>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;