import './Home.css'
import News from '../News/News';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const allNewses = useLoaderData()
    console.log(allNewses)

    return (
        <div className='home-container'>
            <h3 >this is home page on</h3>

            {
                allNewses.map((news, index) => <News
                    index={index}
                    key={news._id}
                    news={news}
                ></News>)
            }
        </div>
    );
};

export default Home;