import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Stack } from "@mui/material";
import { MenuItem } from "@mui/material";

function MUIAppBar() {

    const [anchorel, setAnchorel] = React.useState(null);
    const openMenu = (e) => {
        setAnchorel(e.currentTarget);
    }

    const closeMenu = () => {
        setAnchorel(null);
    }

    const openControl = anchorel ? true : false;

    return (

        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon sx={{ color: '#fff' }} />
                </IconButton>
                <Typography variant="h6">MUI</Typography>

                <Stack direction="row" marginLeft='auto'>
                    <Button sx={{ color: '#fff' }}>Anasayfa</Button>
                    <Button sx={{ color: '#fff' }}>Hakkımızda</Button>
                    <Button sx={{ color: '#fff' }} onClick={openMenu}>Ürünler</Button>
                    <Button sx={{ color: '#fff' }}>İletişim</Button>
                </Stack>

                <Menu anchorEl={anchorel} open={openControl} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu}>Ürün 1</MenuItem>
                    <MenuItem onClick={closeMenu}>Ürün 2</MenuItem>
                    <MenuItem onClick={closeMenu}>Ürün 3</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>



    );

}
export default MUIAppBar;
