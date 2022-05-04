import React from "react";
import { styled } from "@mui/system";
import StarRating from "./StarRating";
import { Props as ColorListProps } from "./ColorList";
import { FaTrash } from "react-icons/fa";

// const useStyles = makeStyles({
//   mysection: {
//       height: 50,
//   },
// });
// <div className={classes.mysection} style={{backgroundColor: color}}/>

const MyDiv = styled('div')({
  height: 50,
});

export interface Attrs {
    id: string;
    title: string;
    color: string;
    rating: number;
}

type Props = Attrs & Pick<ColorListProps, 'onRemoveColor' | 'onRateColor'>;

const Color: React.FC<Props> = ({ id, title, color, rating, onRemoveColor, onRateColor }) => {
    return (
    <section>
      <h1>{title}</h1>
      <button type="button" onClick={() => onRemoveColor(id)}>
        <FaTrash/> Delete
      </button>
      <MyDiv style={{backgroundColor: color}}/>
      <StarRating
        selectedStars={rating}
        onSelect={(rating) => onRateColor(id, rating)}
      />
    </section>
  );
};

export default Color;
