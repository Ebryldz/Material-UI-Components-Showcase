import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import LinearProgress from '@mui/material/LinearProgress';

function MUIProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const plusValue = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + plusValue, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);



    return (

        <Box>
            {/* <CircularProgress />
            <CircularProgress color="success" />
            <LinearProgress />
            <br />
            <LinearProgress color="secondary" /> */}

            <LinearProgress variant="determinate" value={progress} />

        </Box>
    );
}

export default MUIProgress;
