import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Categories = ({cat}) => {
    const {author, price, category_id, details, image_url, title, _id} = cat
    return (
        <div className='my-4'>
            <Card style={{ width: '80%', margin:"auto" }}>
      <Card.Img className='px-3 pt-3' variant="top" height={"400px"} src={image_url} />
      <Card.Body>
        <Card.Title>{author.name}</Card.Title>
        Title: {title}
        <Card.Text>
         Details: {details}
        </Card.Text>
        <Link to="/premium-course">
        <Button variant="primary">Premium Course</Button>
        </Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Categories;