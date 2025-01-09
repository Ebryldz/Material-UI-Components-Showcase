import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MUITable() {

    const rows = [
        { name: 'Ebru', surname: 'Yıldız', id: 1, age: 20 },
        { name: 'Ali', surname: 'Kaya', id: 2, age: 25 },
        { name: 'Veli', surname: 'Kaya', id: 3, age: 30 },
        { name: 'Ayşe', surname: 'Kaya', id: 4, age: 35 },
    ];

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.surname}</TableCell>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    );
}

export default MUITable;
