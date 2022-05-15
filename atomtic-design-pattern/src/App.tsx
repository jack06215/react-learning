import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { WhiteFilledButton } from "./components/atoms/Button";

function App() {
  return (
    <div>
      <WhiteFilledButton icon={<DeleteRoundedIcon />} onClick={() => {}}>
        クリック me plz!
      </WhiteFilledButton>
    </div>
  );
}

export default App;
