import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            Category {categoryNews.length}
            <div className="news-wrap">
                {
                    categoryNews.map(news =>
                        <NewsCard
                            key={news._id}
                            news={news}
                        ></NewsCard>
                    )
                }
            </div>
        </div>
    );
};

export default Category;