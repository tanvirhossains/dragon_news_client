import React, { useEffect, useState } from 'react';
import Catagories from '../pages/Category/Catagories';
import { toast } from 'react-hot-toast';

const LeftSideNav = () => {
    const [catagories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/news-categories")
            .then(response => response.json())
            .then(result => {
                setCategories(result)
                // console.log(result)
            })
    }, [])
    const notify = () => {
        loading()
        toast.success('Here is your toast.')
    };
    const loading = () => toast.loading('Here is your loading toast.');
    
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

            <div>
                <button onClick={notify}>Make me a toast</button>
                {/* <Toaster /> */}
            </div>
        </div>
    );
};

export default LeftSideNav;