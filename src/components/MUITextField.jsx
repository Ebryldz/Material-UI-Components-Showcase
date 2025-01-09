import React from "react";
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

function MUITextField() {
    return (
        <div>
            <div>
                <TextField label="isim" variant="outlined" />
                <TextField label="isim" variant='filled' />
                <TextField label="isim" variant='standard' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim" variant="outlined" color='error' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim" variant="outlined" color='error' helperText="isminizi giriniz" />
                <TextField label="şifre" variant="outlined" color='error' helperText="şifrenizi kimseye göstermeyiniz" />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="kimlik no" disabled variant="outlined" color='error' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField InputProps={{ readOnly: true }} value="ebru" disabled variant="outlined" color='error' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>KG</InputAdornment>
                        ),
                    }} variant="outlined" />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="isminizi giriniz."
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'><PersonIcon /></InputAdornment>
                        ),
                    }} variant="outlined" />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="Soyisim giriniz."
                    InputProps={{
                        endAdornment: (<InputAdornment position='end'>
                            <PersonIcon />
                        </InputAdornment>
                        ),
                    }} variant="outlined" />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="Soyisim giriniz." variant="outlined" size='small' />
                <TextField label="Soyisim giriniz." variant="outlined" size='medium' />
            </div>





        </div>
    );
}

export default MUITextField;
