import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './RightSideNav.css'
import { Card, ListGroup, Nav } from 'react-bootstrap';
import Adds from './Adds';
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { googleSignIn } = useContext(AuthContext)
    
    const provider = new GoogleAuthProvider();  
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };


    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = result.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(token, "  user", user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // // ...
                console.log(errorCode, "errorMassage:>> ", errorMessage)
            });
    }


    return (
        <div className='mt-3' >
            {/* <h1 >RightSideNav</h1> */}
            <ButtonGroup vertical className=''>
                <Button onClick={handleGoogleSignIn} className='signInButton w-full' variant="outline-primary" ><FaGoogle /><span>Sign In with Google</span> </Button>
                <Button className='signInButton' variant="outline-secondary"><FaFacebook /><span>Sign in with Facebook </span> </Button>
            </ButtonGroup>

            <h4 className='mt-3'>Join with Us!</h4>
            <ListGroup className='mt-2 '>
                <Nav.Link className='text-white bg-secondary  rounded mb-2 d-flex justify-content ps-3 align-items-center fs-4 ' href="https://getbootstrap.com/docs/4.0/utilities/display/"><FaFacebook /> <span className='ms-2'>Facebook</span></Nav.Link>
                <Nav.Link className='text-white bg-secondary  rounded mb-2 d-flex justify-content- ps-3 align-items-center fs-4 ' href="https://getbootstrap.com/docs/4.0/utilities/display/"><FaTwitter /> <span className='ms-2'>Twitter</span></Nav.Link>
                <Nav.Link className='text-white bg-secondary  rounded mb-2 d-flex justify-content- ps-3 align-items-center fs-4 ' href="https://getbootstrap.com/docs/4.0/utilities/display/"><FaLinkedin /> <span className='ms-2'>LinkedIn</span></Nav.Link>
            </ListGroup>

            <h3>Trending News</h3>
            <img src="" alt="" />
            <title></title>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Adds />


        </div>
    );
};

export default RightSideNav;