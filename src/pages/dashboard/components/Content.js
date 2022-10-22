import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(name, email, address, client, id) {
    return { name, email, address, client, id };
}

const rows = [
    createData('Rasdhan WO', 159, 6.0, 24, 4.0),
    createData('Dhimaz WO', 237, 9.0, 37, 4.3),
];

const Content = () => {
    return (
        <div>
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon color="inherit" sx={{ display: 'block' }} />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Search by email address, phone number, or user UID"
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: { fontSize: 'default' },
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" sx={{ mr: 1 }}>
                                    Add user
                                </Button>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Client</TableCell>
                                    <TableCell align="right">ID</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.client}</TableCell>
                                        <TableCell align="right">{row.id}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" sx={{ mr:1 }}>
                                                Delete
                                            </Button>
                                            <Button variant="contained">
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AppBar>
                {/* <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                    No users for this project yet
                </Typography> */}
            </Paper>
        </div>
    );
}

export default Content