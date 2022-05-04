import React, { useState } from 'react';

const useInput = (initialValue: number | boolean | string) => {
    const [value, setValue] = useState(initialValue);
    return [
        value,
        (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        () => setValue(initialValue)
    ];
};

export {
    useInput
};