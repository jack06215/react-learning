import React from "react";
import { makeStyles } from "@mui/styles";
import StarRating from "./StarRating";

const useStyles = makeStyles({
  mysection: {
      height: 50,
  },
});

export interface Props {
    id: string;
    title: string;
    color: string;
    rating: number;
}

const Color: React.FC<Props> = ({ title, color, rating }) => {
    const classes = useStyles();
    return (
    <section>
      <h1>{title}</h1>
      <div className={classes.mysection} style={{backgroundColor: color}}/>
      <StarRating selectedStars={rating}/>
    </section>
  );
};

export default Color;
