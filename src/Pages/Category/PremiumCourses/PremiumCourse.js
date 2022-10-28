import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PremiumCourse = ({premium}) => {
    const {image_url, price, details, title, } =premium
    return (
        <div className='my-4'>
            <Card style={{ width: '100%', }}>
      <Card.Img variant="top" height={"500px"} src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <h6>{price}</h6>
        <Link >
        <Button
         variant="primary">Buy Now</Button>
        </Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default PremiumCourse;