import React, { useEffect, useRef  } from 'react';
import { styled } from '@mui/system';
import { useThrottle } from './hooks';

interface PropsProgressBar {
    percentage: number;
}

const RedLoadingBar = styled('div')({
    width: 0,
    height: 10,
    borderRadius: 4,
    background: "#FF0000",
    transition: "width 0.5s",
});

const ProgressBar = ({ percentage }: PropsProgressBar) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const updatedWidth = useThrottle(percentage, 100);
    const updateWidth = (value: number) => {
        if (elementRef.current != null){
            elementRef.current.style.width = `${value}%`;
        }
    };

    useEffect(() => {
        if (updatedWidth) {
            updateWidth(updatedWidth);
        }
    }, [updatedWidth]);
    
    return <RedLoadingBar ref={elementRef}/>
};

export default ProgressBar;
