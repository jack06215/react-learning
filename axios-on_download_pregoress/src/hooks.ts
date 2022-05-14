import { useRef, useState, useEffect } from 'react';

export const useThrottle = (value: number, limit: number) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastRun = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            if (Date.now() - lastRun.current >= limit) {
                setThrottledValue(value);
                lastRun.current = Date.now();
            }
        }, limit - (Date.now() - lastRun.current));

        return () => {
            clearTimeout(handler);
        };
    }, [value, limit]);

    return throttledValue;
};