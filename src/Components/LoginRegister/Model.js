import React, { useContext, useRef } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import userPng from '../../asset/user.png'
import './Login.css'

const Model = (props) => {

    // const background = {

    //     paddingLeft: '20px',
    //     paddingTop: "10px",
    //     backgroundImage: `url(${userPng})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '20px',
    //     // backgroundSize: 'contain',
    //     marginLeft: '',

    // }
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
                        Log In Please To Continue !
                    </Modal.Title>
                </Modal.Header>

                <Form className="card-bod  mx-auto w-75 m-4 p-  bg-secondar " onSubmit={handleLogIn} >
                    {/* <div className="form-contro mx-4"> */}

                    <input ref={emailRef} type="email" class="input-email form-control border-start-0  my-4" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required />

                    <input ref={passwordRef} type="password" placeholder="password" className="form-control  input-password" required />

                    <span className="">Are You New? </span>
                    <Link to='/#login' className="btn btn-link" onClick={handleRegisterShow}>
                        Register
                    </Link>

                    <button class="form-control btn btn-secondary  my-2" type="submit">Log In </button>

                    {/* </div> */}
                    <p class="fancy">or</p>
                    <div class="d-flex justify-between  gap-2 mb-4">
                        <button class="form-control btn btn-danger  my-2" type="submit"><FaGoogle className='mb-1' /> Google Sign In </button>
                        <button class="form-control btn btn-primary  my-2" type="submit"> <FaFacebookF className=' mb-1' /> Facebook Sign In</button>
                    </div>
                </Form>



            </Modal>







            <Modal show={registerModal} onHide={handleRegisterClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Register Please</Modal.Title>
                </Modal.Header>

                <Form className="card-bod  mx-auto w-75  " onSubmit={handleSignUp} >
                    {/* <div className="form-contro border-0"> */}

                    <input name='UserName' type="text" placeholder="User Name" className="form-control input-userName " required />

                    <input name='photoUrl' type="text" placeholder="Photo Url" className="form-control input-photoUrl " required />

                    <input name='email' type="email" placeholder="email" className="form-control input-email " required />
                    {/* </div> */}

                    <input name="password" type="password" placeholder="password" className="input-password mt-4 form-control " required />
                    <br />
                    <label className="label">
                        <Link to="/#register" className="label-text-alt link link-hover" onClick={handleLoginShow}>Already have and account?</Link>
                    </label>

                    {/* <div className="form-control mt-6 w-ful bg-secondary"> */}
                    <button className="form-control fw-bold fs-5 my-2 btn btn-primary w-full">Register</button>
                    {/* </div> */}
                    <p class="fancy">or</p>
                    <div class="d-flex justify-between  gap-2 mx-">
                        <button class="form-control btn btn-danger  my-2" type="submit"><FaGoogle className='mb-1' /> Google Sign In </button>
                        <button class="form-control btn btn-primary  my-2" type="submit"> <FaFacebookF className=' mb-1' /> Facebook Sign In</button>
                    </div>
                </Form>




                {/* <Modal.Footer>

                    
                </Modal.Footer> */}
            </Modal>

        </div>
    );
};

export default Model;