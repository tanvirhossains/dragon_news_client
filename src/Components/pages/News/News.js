import React from 'react';
// import './news.css'


const News = ({ news, index }) => {
    const { title, details } = news

    return (
        <div>
            <h4> {index + 1}. {title}</h4>
            <p>{details}</p>
        </div>
    );
};

export default News;