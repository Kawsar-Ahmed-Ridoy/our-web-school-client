import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const Category = () => {
    const category = useLoaderData();
    
    return (
        <div>
            {
                category.map(cat => <Categories 
                    key={cat._id} 
                    cat={cat}></Categories>)
            }
        </div>
    );
};

export default Category;