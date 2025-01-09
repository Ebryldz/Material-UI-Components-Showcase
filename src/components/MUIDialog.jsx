import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)} >
                Dialog
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle>soru</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt minus, cum dicta amet atque libero vel id facilis eos qui itaque esse rem! Iure doloremque, at quos enim iusto architecto!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Disagree</Button>
                    <Button onClick={() => setOpen(false)}>Agree </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MUIDialog;
