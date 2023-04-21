import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Catagories = ({ category }) => {
    const { name,id } = category
    const params = useParams();
    // console.log(params)
    // params.id; // abc
    // params.taskId; // 3
    return (
        <div className=''>
            <Link className='' to={`/news/${id}`}> {name}</Link>
        </div>
    );
};

export default Catagories;