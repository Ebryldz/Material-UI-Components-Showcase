import React from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import TextField from '@mui/material/TextField';


function MUISelect() {
    const [currencies, setCurrencies] = useState([]);

    return (
        <div>
            {/* <FormControl sx={{ width: '150px' }}>
                <InputLabel>Para birimi</InputLabel>
                <Select value={currencies} onChange={(e) => setCurrencies(e.target.value)}>
                    <MenuItem value='TRY'>Türk lirası</MenuItem>
                    <MenuItem value='USD'>Dolar</MenuItem>
                    <MenuItem value='EUR'>Euro</MenuItem>
                </Select>
            </FormControl> */}

            <TextField
                SelectProps={{ multiple: true }}
                value={currencies} onChange={(e) => setCurrencies(e.target.value)} sx={{ width: '250px' }} label="Para birimi" select >
                <MenuItem value='TRY'>Türk lirası</MenuItem>
                <MenuItem value='USD'>Dolar</MenuItem>
                <MenuItem value='EUR'>Euro</MenuItem>

            </TextField>
        </div>
    );
}

export default MUISelect;
