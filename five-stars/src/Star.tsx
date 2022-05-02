import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  selected: boolean;
  onSelect: () => void;
};

const Star: React.FC<Props> = ({selected = false, onSelect}) => {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};

export default Star;
