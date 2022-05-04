import React, { useState } from 'react';
import { useInput } from './hooks';

interface Props {
    onNewColor: (title: string, color: string) => void;
}

const AddColorFrom: React.FC<Props> = ({ onNewColor }) => {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

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
    }
    
    return (
        <form onSubmit={submit}>
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