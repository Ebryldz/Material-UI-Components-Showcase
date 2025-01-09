import React from "react";

import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

function MUIAlert() {
    return (
        <div>
            <Alert sx={{ width: 200 }} severity="success">This is a success Alert.</Alert>
            <Alert sx={{ width: 200, marginTop: 5 }} severity="info">This is an info Alert.</Alert>
            <Alert sx={{ width: 200, marginTop: 5 }} severity="warning" variant='filled'>This is a warning Alert.</Alert>
            <Alert sx={{ width: 200, marginTop: 5 }} severity="error" variant='outlined'>This is an error Alert.</Alert>
            <Alert variant='standard'
                severity='success'
                sx={{ width: 200, marginTop: 5 }}>
                <AlertTitle>Success</AlertTitle>
                This is an info Alert

            </Alert>
        </div>
    );
}

export default MUIAlert;
