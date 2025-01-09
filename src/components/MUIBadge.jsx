import React from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MUIBadge() {
    return (
        <Badge sx={{ margin: 10 }} badgeContent={17} color="primary" max={9} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MailIcon color="action" />
        </Badge>
    );
}

export default MUIBadge;
