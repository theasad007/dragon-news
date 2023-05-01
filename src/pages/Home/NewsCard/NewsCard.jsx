import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    console.log(news)
    return (
        <Card className="mt-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className="author d-flex gap-3">
                    <Image style={{ width: 50, height: 50 }} src={author.img} roundedCircle />
                    <div className="author-info">
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'><small>{moment(author.published_date).format('YYYY-MM-DD')}</small></p>
                    </div>
                </div>
                <div className="share d-flex gap-2">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='my-3' />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <Rating className='text-warning'
                        readonly
                        placeholderRating={3.5}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ms-2 fs-6 mt-1'>{rating?.number}</span></div>
                <div><FaEye></FaEye> {total_view}</div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;