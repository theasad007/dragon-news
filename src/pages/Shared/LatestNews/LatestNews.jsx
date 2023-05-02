import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const {latestNews} = useContext(AuthContext);
    return (
        <div className="container latest-news d-flex mb-3">
            <h5 className='bg-danger p-2 fs-5 text-white border-0 rounded-0 me-3'>Latest</h5>
            <Marquee pauseOnHover='true'>
                {
                    latestNews.map((breaking, idx) => <Link to={`/news/${breaking._id}`} key={idx} className='text-decoration-none text-black me-5'>{breaking.title}</Link>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;