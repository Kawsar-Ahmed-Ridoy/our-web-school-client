import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({course}) => {
const {image_url, id, details, title, author} = course;
    return (
               <div className="mx-auto">
            <Card style={{ width: '18rem',  height:'450px'}}>
        <Card.Img height={250} className='bg-black rounded-2' variant="top" src={image_url}  />      
        <Card.Body className='  '>
          <Card.Title className='fw-bold'>{author.name}</Card.Title>
          <Card.Text className='fw-bold mb-0'>
           {title}
          </Card.Text>
         {details.length > 50 ?
          <p>Details: {details.slice(0,40) + '...'} <Link to={`/category/${id}`}>details</Link> </p> : <p>{details}</p>
         }
          <div className='text-center'>
          <Link >
          <Button variant="primary">Start Quiz</Button>
          </Link>
          </div>
          
        </Card.Body>
      </Card>
        </div>
    );
};

export default Item;