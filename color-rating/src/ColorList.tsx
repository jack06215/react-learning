import React from 'react';
import Color from './Color';
import { Props as ColorProps } from './Color';

interface Props {
    colors: Array<ColorProps>;
}

const ColorList: React.FC<Props> = ({ colors }) => {
    return (
        <div>
            {colors.map(color => (
                <Color key={color.id} {...color}/>
            ))}
        </div>
    );
};

export default ColorList;