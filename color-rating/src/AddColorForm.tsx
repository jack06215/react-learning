import React, { useState } from 'react';

interface Props {
    onNewColor: (title: string, color: string) => void;
}

const AddColorFrom: React.FC<Props> = ({ onNewColor }) => {
    // const txtTitle = useRef<string>();
    // const hexColor = useRef<string>();
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    // const [sample, setSample, resetSample] = useInput("");

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    };

    const onChnageColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
        // const title = txtTitle.current!;
        // const color = hexColor.current!;
        // onNewColor(title, color);
        // txtTitle.current = '';
        // hexColor.current = '';
    }
    return (
        <form onSubmit={submit}>
            {/* <input ref={txtTitle.current} type='text' placeholder='color title...' required />
            <input ref={hexColor.current} type='color' placeholder='pick color' required/> */}
            <input 
                value={title}
                onChange={onChangeTitle}
                type='text'
                placeholder='color title...'
                required />
            <input 
                value={color}
                onChange={onChnageColor}
                type='color'
                placeholder='pick color'
                required/>
            <button type='button'>ADD</button>
        </form>
    );
};

export default AddColorFrom;