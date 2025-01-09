import React from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <>
            <Button color="info" size="small" onClick={handleClose}>
                kapat
            </Button>
            <IconButton sx={{ size: "small", color: "#fff" }}

                onClick={handleClose}
            >
                <CloseIcon sx={{ fontSize: "small", color: '#fff' }} />
            </IconButton>
        </>
    );


    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Hata oluştu."
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </div>
    );
}

export default MUISnackbar;
