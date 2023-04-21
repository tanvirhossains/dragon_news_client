import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const loader = useLoaderData()
    // console.log(loader)
    return (
        <div>
            <h2>this is category </h2>
        </div>
    );
};

export default Category;