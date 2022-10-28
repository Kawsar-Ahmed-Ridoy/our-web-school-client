import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from './Items/Item';



const Courses = () => {
const allCourse = useLoaderData()
console.log(allCourse);
    return (<div className='d-flex mb-5 flex-wrap gap-4 justify-content-between justify-content-sm-center '>
      {
        allCourse.map(course => 
            <Item
        key={course._id}
        course={course}
        ></Item>
          )
    }  
    </div>

 
    );
};

export default Courses;