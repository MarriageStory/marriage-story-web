import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function createData(name, email, address, client, id) {
    return { name, email, address, client, id };
}

const rows = [
    createData('Rasdhan WO', 'rasdhanWedding158@gmail.com', 'Jl. Darmawangsa Blok. C', 4, 1),
    createData('Dhimaz WO', 'rahayuWeddingOrgz@gmail.com', 'Perum Surya Sejahtera C/2', 7, 2),
];

const Content = () => {
    const navigate = useNavigate();

    const handleAddNew = () => {
        navigate("/form");
    }

    return (
        <div>
            <Paper ariant="outlined" sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="Picture WO"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Rashdan WO
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi neque facere tenetur debitis quisquam ab nesciunt perspiciatis doloribus recusandae!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show More</Button>
                        </CardActions>
                    </Card>
                    {/* <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="Picture WO"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Rashdan WO
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi neque facere tenetur debitis quisquam ab nesciunt perspiciatis doloribus recusandae!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show More</Button>
                        </CardActions>
                    </Card> */}
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon color="inherit" sx={{ display: 'block' }} />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Search by email, address, or user ID"
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: { fontSize: 'default' },
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" sx={{ mr: 1 }} onClick={handleAddNew} >
                                    Add New
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
                                            <Button sx={{ mr: 1 }} size="small">
                                                <DeleteIcon fontSize="small" />
                                            </Button>
                                            <Button size="small">
                                                <EditIcon fontSize="small" />
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
