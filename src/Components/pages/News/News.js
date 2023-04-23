import React from 'react';
// import './news.css'
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const News = ({ news, index }) => {
    const { author, image_url, details, title, total_view, rating, _id, category_name } = news
    return (
        <div className='my-3 '>
            <Card className='border-0 bg- shadow-lg  bg-body-tertiary rounded p-0'>

                {/* -------------------------author data  */}
                <div className='d-flex justify-content-between  align-items-center p-3'>
                    <div className='d-flex align-items-center'>
                        <img className='author_img' src={author.img} alt="Writer" />
                        <div>
                            <p> <span className='fw-bold'>{author.name} </span> <br /> <span>{author.published_date}</span></p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <span> <FaRegBookmark /> </span> <span><FaShareAlt /></span>
                    </div>
                </div>

                <Card className='rounded-0 border-top-1 border-bottom-1 border-end-0 border-start-0 p-0'>
                    {/* <Card.Body> */}
                    <Card.Text className='p-0 text-center fw-bold fs-5'>
                        {title}
                    </Card.Text>
                    {/* </Card.Body> */}
                    <Card.Img className='px-2' variant="top" src={image_url} />
                    {/* <Card.Body > */}
                    <div className='py-2'>

                        {/* {details.slice(0, 120)}... <Link className='see_more' to='/'>see more</Link> */}
                        {
                            details.length > 150
                                ?
                                <p>{details.slice(0, 150) + "..."}<Link to={`/${category_name}/${_id}/${title}`}>See More</Link></p>

                                :
                                <p>{details}</p>
                        }
                    </div>
                </Card>
                <br />

                {/*  ratings of the writings  */}
                <div className='d-flex justify-content-between  align-items-cente pb-3'>

                    <div className='fs-5 ps-3'>
                        <span className='mb-4 text-warning'><FaStar /></span>
                        <span className='ms-2 mb'>{rating.number}</span>
                    </div>

                    <div className='fs-5 pe-3'>
                        <span className='f '><FaEye /></span>
                        <span className='ms-2'>{total_view}</span>
                    </div>


                </div>

            </Card>

        </div>
    );
};



export default News;