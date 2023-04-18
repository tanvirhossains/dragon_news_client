import React, { useEffect, useState } from 'react';
import Catagories from '../pages/Category/Catagories';

const LeftSideNav = () => {
    const [catagories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/news-categories")
            .then(response => response.json())
            .then(result => {
                setCategories(result)
                console.log(result)
            })
    }, [])

    return (
        <div className=''>
            <h4>All Catagories! </h4>
            {
                catagories.map(category => <Catagories
                    key={category.id}
                    category={category}
                ></Catagories>)
            }
            {/* <Catagories /> */}
        </div>
    );
};

export default LeftSideNav;