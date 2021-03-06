import React, { useState } from 'react';
import { createArray } from './lib';
import Star from './Star';

interface Props {
    totalStars?: number;
}

const StarRating: React.FC<Props> = ({ totalStars = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
};

export default StarRating;