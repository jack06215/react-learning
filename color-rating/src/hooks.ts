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

// import React, { useState, useCallback, ChangeEvent } from 'react';

// type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

// const useInput = (initValue = '') => {
//     const [value, setValue] = useState(initValue);

//     const handler = useCallback(() => {
//         setValue(initValue);
//     }, [initValue]);

//     return [value, handler, setValue] as [string, onChangeType, typeof setValue];
// };

// export {
//     useInput
// };