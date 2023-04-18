import React, { useEffect, useState } from 'react';
import './Home.css'
import News from '../News/News';

const Home = () => {
    const [newses, setNewses] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then(response => response.json())
            .then(data => {
                setNewses(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='home-container'>
            <h3 >this is home page</h3>

            {
                newses.map((news, index) => <News
                    index={index}
                    key={news._id}
                    news={news}
                ></News>)
            }
        </div>
    );
};

export default Home;