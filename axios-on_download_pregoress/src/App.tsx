import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Box } from '@mui/material';
import { downloadImage } from "./api";
import ProgressBar from "./ProgressBar";

const Center = styled('div')({
    fontFamily: 'sans-serif',
    textAlign: 'center',
});

const CenterBox = styled(Box)({
    fontFamily: 'sans-serif',
    textAlign: 'center',
});

const App = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchImage();
  }, []);

  function fetchImage() {
    setLoading(true);
    downloadImage({
      onDownloadProgress: (progressEvent) => {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentage);
        if (percentage === 100) {
          setTimeout(() => {
            setLoading(false);
          }, 400);
        }
      },
    });
  }

  function fetchImageAgain() {
    setProgress(0);
    fetchImage();
  }

  return (
    <CenterBox>
      {loading && <ProgressBar percentage={progress} />}
      <button type="button" onClick={fetchImageAgain}>
        Fetch Again
      </button>
      <h1>Hello Progress Bar</h1>
      <h3>Click the button to begin the progress bar</h3>
    </CenterBox>
  );
};

export default App;
