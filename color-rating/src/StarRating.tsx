import React from 'react';
import { createArray } from './lib';
import Star from './Star';

interface Props {
    totalStars?: number;
    selectedStars?: number;
}

const StarRating: React.FC<Props> = ({ totalStars = 5, selectedStars = 0}) => {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i}
                    selected={selectedStars > i}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
};

export default StarRating;