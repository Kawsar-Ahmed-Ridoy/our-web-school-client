import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div >
            <h2 className='text-dark'>Course List</h2>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;