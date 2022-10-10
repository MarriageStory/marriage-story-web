import React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import { AccountCircle } from '@mui/icons-material';

const categories = [
    {
        id: 'Menu',
        children: [
            { id: 'Home', icon: <HomeIcon /> },
            { id: 'Clients', icon: <DnsRoundedIcon /> },
            { id: 'Signout', icon: <AccountCircle /> },
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;


    //Logout logic start
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    //Logout logic end

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
<<<<<<< HEAD
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    <img src="../assets/marriagelogo.png" alt="Marriage Story" />
                </ListItem>
=======
                <ListItemButton sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    <img src="../../../../public/assets/img/Title.png" alt="Marriage Story" />
                </ListItemButton>
                {/* <ListItemButton component="a" href="#">
                    <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                    <ListItemText
                        sx={{ my: 0, fontSize: 80}}
                        primary="Marriage Story"
                    />
                </ListItemButton> */}
>>>>>>> 08befc54597db7f516679e99a530a870dae760af
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#FBC0C0' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#202124' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}