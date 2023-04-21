import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNews from './CategoryNews';

const CategoryNewses = () => {
    const newsCategories = useLoaderData()
    console.log(newsCategories)
    return (
        <div>
            {/* <h2>Category ways news</h2> */}
            {
                newsCategories.map((newsCategory, index) => <CategoryNews
                    index
                    newsCategory={newsCategory}
                    key={newsCategory._id}

                ></CategoryNews>)
            }
        </div>
    );
};

export default CategoryNewses;