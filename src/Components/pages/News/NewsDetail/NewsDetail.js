import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetailInfo from './NewsDetailInfo';

const NewsDetail = () => {
    const singleNews = useLoaderData()
    console.log(singleNews)

    return (
        <div className='home-container'>

            <NewsDetailInfo
                key={singleNews._id}
                news={singleNews}
            ></NewsDetailInfo>

        </div>
    );
};

export default NewsDetail;