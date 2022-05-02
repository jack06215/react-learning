import React, { useState } from 'react';
import Star from './Star';

type Props = {
    totalStars?: number;
};

const createArray = (length: number) => [...Array(length)];

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