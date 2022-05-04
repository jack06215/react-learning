import { useState } from 'react';
import colorData from "./color-data.json";
import ColorList from './ColorList';

function App() {
  const [colors, setColors] = useState(colorData);

  const removeColor = (id: string) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  return (
    <ColorList
      colors={colors}
      onRemoveColor={removeColor}
      onRateColor={rateColor}
    />
  );
}

export default App;
