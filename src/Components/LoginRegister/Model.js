import React, { useContext, useRef } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaMailBulk } from 'react-icons/fa';

const Model = (props) => {

    const { logInModal, setLogInModel, handleLoginShow, handleLoginClose, registerModal, setRegisterModal, handleRegisterClose, handleRegisterShow } = props.modalEle


    const { signInUser, createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(`${email}'/n'  ${password}`)

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLogIn = (event) => {

        event.preventDefault();
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        const userEmail = emailRef.current.value;
        const userPassword = passwordRef.current.value;
        console.log(`${userEmail}'/n'  ${passwordRef}`)

        signInUser(userEmail, userPassword)
        toast.success("log in succefully!")
        // function handleClick() {
        //     console.log(inputRef.current.value);
        // }
    }
    return (
        <div>

            <Modal show={logInModal} onHide={handleLoginClose} backdrop="static"
                keyboard={false} centered >
                <Modal.Header className='' closeButton >
                    <Modal.Title className='text-cente' >
                        Log In Please To Continue !jk
                    </Modal.Title>
                </Modal.Header>



                <Form className="card-bod a  w-full border-0 " onSubmit={handleLogIn} >
                    <div className="form-contro mx-4">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <label className="label">
                            <span className="label-text fs-5 fw-bold">Email</span>
                        </label>

                        <FaMailBulk />
                        <input className="form-control " ref={emailRef} type="email" placeholder="Your email " required />

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <br />
                        <input ref={passwordRef} type="password" placeholder="password" className="form-control " required />
                        <br />
                        {/* <label className="label"> */}
                        <span className="">Are You New?</span> <span><Link to='/#login' className="btn btn-link" onClick={handleRegisterShow}>
                            Register
                        </Link> </span>
                        {/* </label> */}
                    </div>
                    <div className="form-control mt-6 w-full text-center bg-secondary">
                        <button className="btn btn-primary w-full">Log in</button>
                    </div>
                </Form>



                {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
                <Modal.Footer>
                    {/* <Link to='/#login' className="btn btn-link" onClick={handleRegisterShow}>
                        Register
                    </Link> */}

                </Modal.Footer>
            </Modal>







            <Modal show={registerModal} onHide={handleRegisterClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Register Please</Modal.Title>
                </Modal.Header>

                <Form className="card-body mx-3 a mx-auto w-75 borde " onSubmit={handleSignUp} >
                    <div className="form-contro border-0">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <br />
                        <input name='email' type="email" placeholder="email" className="form-control " required />
                    </div>

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <br />
                    <input name="password" type="password" placeholder="password" className="form-control " required />
                    <br />
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">Are You New?</Link>
                    </label>

                    <div className="form-control mt-6 w-ful bg-secondary">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                </Form>



                <Modal.Footer>

                    <Link to='/#login' className="btn btn-link" onClick={handleLoginShow}>
                        Login
                    </Link>
                    {/* <Button variant="primary" onClick={handleLoginClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Model;