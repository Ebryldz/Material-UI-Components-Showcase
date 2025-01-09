import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
    return (

        <Stack spacing={2}>
            <Avatar src='https://randomuser.me/api/portraits/men/61.jpg' sx={{ width: 50, height: 50 }} />
            <Avatar>E</Avatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>Y</Avatar>
        </Stack>
    );
}

export default MUIAvatar;
