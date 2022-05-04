import React from 'react';
import Color from './Color';
import { Attrs as ColorProps } from './Color';

export interface Props {
    colors: Array<ColorProps>;
    onRemoveColor: (id: string) => void;
    onRateColor: (id: string, rating: number) => void;
}

const ColorList: React.FC<Props> = ({ colors, onRemoveColor, onRateColor }) => {
    return (
        <div>
            {colors.map(color => (
                <Color
                    key={color.id} {...color}
                    onRemoveColor={onRemoveColor}
                    onRateColor={onRateColor}
                />
            ))}
        </div>
    );
};

export default ColorList;