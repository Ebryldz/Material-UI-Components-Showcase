import React, { useEffect } from "react";

import Skeleton from '@mui/material/Skeleton';
import Cloud from '../images/cloud.png';

function MUISkeleton() {
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    return (
        <div>
            {loading ? <Skeleton variant='rounded' width={150} height={150} animation="wave" />
                : <img src={Cloud} width={150} height={150} />}

        </div>
    );
}

export default MUISkeleton;
