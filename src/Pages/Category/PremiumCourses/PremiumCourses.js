import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import PremiumCourse from './PremiumCourse';

const PremiumCourses = () => {
    const premiumCourses = useLoaderData()
    
    return (
        <div>
            {
                premiumCourses.map(premium => <PremiumCourse 
                    key={premium._id}
                    premium={premium}
                    ></PremiumCourse>)
            }
        </div>
    );
};

export default PremiumCourses;