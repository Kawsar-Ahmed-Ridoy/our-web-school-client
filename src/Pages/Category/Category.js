import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData();
    return (
        <div>
            <h1>this is category {category.length}</h1>
        </div>
    );
};

export default Category;