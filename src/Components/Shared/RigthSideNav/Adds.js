import React from 'react';
import { Carousel } from 'react-bootstrap';
import add_1 from '../../../asset/add-1.jpeg';
import add_3 from "../../../asset/add-1.jpeg";
import add_2 from "../../../asset/add-2.jpeg";


const Adds = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: 200 }}
                    className=" d-block w-100"
                    src={add_1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: 200 }}
                    className=" d-block w-100"
                    src={add_2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: 200 }}
                    className=" d-block w-100"
                    src={add_3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
};

export default Adds;