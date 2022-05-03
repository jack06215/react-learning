import React from "react";
import { styled } from "@mui/system";
import StarRating from "./StarRating";

// const useStyles = makeStyles({
//   mysection: {
//       height: 50,
//   },
// });
// <div className={classes.mysection} style={{backgroundColor: color}}/>

const MyDiv = styled('div')({
  height: 50,
});

export interface Props {
    id: string;
    title: string;
    color: string;
    rating: number;
}

const Color: React.FC<Props> = ({ title, color, rating }) => {
    return (
    <section>
      <h1>{title}</h1>
      <MyDiv style={{backgroundColor: color}}/>
      <StarRating selectedStars={rating}/>
    </section>
  );
};

export default Color;
