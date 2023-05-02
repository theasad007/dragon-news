import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../EditorInsights/EditorInsights';

const News = () => {
    const newsDetails = useLoaderData()
    const { _id, title, image_url, details, category_id } = newsDetails;
    return (
        <div>
            <Card className='p-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger rounded-0">All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;