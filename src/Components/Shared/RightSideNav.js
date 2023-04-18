import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGlassMartiniAlt, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './RightSideNav.css'
import { Carousel, ListGroup } from 'react-bootstrap';

// import add_1 from '../../../asset/add-1.jpeg'
// import add_2 from '../../../asset/add-2.jpeg'
import add_3 from "../../asset/add-1.jpeg"
import add_2 from "../../asset/add-2.jpeg"
import add_1 from "../../asset/add-3.png"

const RightSideNav = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div >
            <h1 >RightSideNav</h1>
            <ButtonGroup vertical>
                <Button className='signInButton' variant="outline-primary" ><FaGoogle /><span>Sign In with Google</span> </Button>
                <Button className='signInButton' variant="outline-secondary"><FaFacebook /><span>Sign in with Facebook </span> </Button>
            </ButtonGroup>
            <h4 className='mt-3'>Join with Us!</h4>
            <ListGroup className='mt-2 '>
                <ListGroup.Item className='rounded mb-2 bg-secondary'><FaFacebook /> Facebook </ListGroup.Item>
                <ListGroup.Item className='rounded mb-2 bg-secondary'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='rounded mb-2 bg-secondary'><FaLinkedin /> LinkedIn</ListGroup.Item>
                <ListGroup.Item className='rounded mb-2 bg-secondary'><FaGlassMartiniAlt /> Gmail </ListGroup.Item>

            </ListGroup>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        style={{height: 200}}
                        className=" d-block w-100"
                        src={add_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: 200}}
                        className=" d-block w-100"
                        src={add_2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: 200}}
                        className=" d-block w-100"
                        src={add_3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RightSideNav;