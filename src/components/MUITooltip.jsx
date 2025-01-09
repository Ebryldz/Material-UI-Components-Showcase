import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUITooltip() {
    return (
        <Tooltip title="Delete" placement="right">
            <IconButton>
                <DeleteIcon />
                {/* <span>Ebru</span> */}
            </IconButton>
        </Tooltip>
    );
}

export default MUITooltip;
