import React, { useEffect, useRef  } from 'react';
import { styled } from '@mui/system';
import { useThrottle } from './hooks';

interface PropsProgressBar {
    percentage: number;
}

const styles = {
    width: 0,
    height: 10,
    borderRadius: 4,
    background: "red",
    transition: "width .4s"
};

const ProgressBar = ({ percentage }: PropsProgressBar) => {
    const elementRef: any = useRef(null);
    const updatedWidth = useThrottle(percentage, 400);
    const updateWidth = (value: number) => {
        elementRef.current.style.width = `${value}%`;
    };

    useEffect(() => {
        if (updatedWidth) {
            updateWidth(updatedWidth);
        }
    }, [updatedWidth]);
    
    return <div ref={elementRef} style={styles}></div>
};

export default ProgressBar;
