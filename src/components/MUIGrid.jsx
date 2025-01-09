import React from "react";

import Grid from '@mui/material/Grid2';

function MUIGrid() {
    return (
        <div>
            <Grid container>                                                 {/* bir satır oluşmuş oldu*/}
                <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9 }}>Item1</Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>Item2</Grid>
            </Grid>

        </div >
    );
}

export default MUIGrid;
