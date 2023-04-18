import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = ({ category }) => {
    const { name } = category
    return (
        <div className=''>
            <Link className='' to='/'> {name}</Link>
        </div>
    );
};

export default Catagories;