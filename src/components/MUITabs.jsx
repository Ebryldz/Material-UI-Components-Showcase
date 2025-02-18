import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from "./CustomTabPanel";

function MUITabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Kişisel Bilgiler" />
                    <Tab label="Eğitim Bilgisi" />
                    <Tab label="İletişim" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Ebru yıldız
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                istün
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                betulebruyildizz@gmail.com
            </CustomTabPanel>
        </Box>
    );
}

export default MUITabs;
