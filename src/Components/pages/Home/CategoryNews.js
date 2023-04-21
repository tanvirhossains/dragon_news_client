import React from 'react';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoryNews.css'

const CategoryNews = ({ newsCategory }) => {
    const { author, image_url, details, title, total_view, rating } = newsCategory
    const { number, badge } = rating;
    const { img, name, published_date } = author;
    return (
        <div className='my-3 '>
            <Card className='border-0 bg- shadow-lg  bg-body-tertiary rounded'>

                {/* -------------------------author data  */}
                <div className='d-flex justify-content-between  align-items-center p-3'>
                    <div className='d-flex align-items-center'>
                        <img className='author_img' src={img} alt="Writer" />
                        <div>
                            <p> <span className='fw-bold'>{name} </span> <br /> <span>{published_date}</span></p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <span> <FaRegBookmark /> </span> <span><FaShareAlt /></span>
                    </div>
                </div>

                <Card className='rounded-0 border-top-1 border-bottom-1 border-end-0 border-start-0 p-1'>
                    <Card.Body>
                        <Card.Text className='p-0 text-center fw-bold fs-5'>
                            {title}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body >
                        <Card.Text className='p-0'>
                            {details.slice(0, 120)}... <Link className='see_more' to='/'>see more</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                {/*  ratings of the writings  */}
                <div className='d-flex justify-content-between  align-items-center px-3'>
                    <div className='d-flex align-items-center'>
                        {/* <span> <FaRegStar /> </span> <span> {number}</span> */}
                        <p className='me-3 text-warning'><FaRegStar /></p>
                        <p>{number}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='f'><FaEye /></p>
                        <p className='ms-2'>{total_view}</p>
                    </div>
                </div>

            </Card>

        </div>
    );
};

export default CategoryNews;