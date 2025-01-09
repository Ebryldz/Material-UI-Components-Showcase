import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpen(true)} >Aç</Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
                <Box sx={{ width: '300px', textAlign: 'center' }}>
                    <h1>Başlık</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit voluptas et accusantium voluptatibus nobis eaque magnam blanditiis, esse nam molestiae odit nesciunt, officiis ut cupiditate quam ea sunt distinctio!</p>
                </Box>
            </Drawer>
        </div>
    );
}

export default MUIDrawer;
