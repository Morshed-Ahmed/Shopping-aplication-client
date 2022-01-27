import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet } from 'react-router-dom';
import { Accordion, AccordionSummary } from '@mui/material';

import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export default function AdminDashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>

                    <ListItem  >
                        <ListItemIcon >
                            <MailIcon />
                        </ListItemIcon>

                        <div /* style={{ border: 'black' }} */>
                            <Accordion sx={{ borderRadius: 16, borderColor: 'primary', border: '1px solid #ED165F' }}>
                                <AccordionSummary

                                >
                                    <Typography sx={{ marginRight: 3.50 }}>DASHBOARD</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </div>

                        {/* <ListItemText primary='hi' /> */}
                    </ListItem>
                    <Divider />

                    <ListItem  >
                        <ListItemIcon >
                            <MailIcon />
                        </ListItemIcon>

                        <div /* style={{ border: 'black' }} */>
                            <Accordion sx={{ borderRadius: 16, border: '1px solid #ED165F' }}>
                                <AccordionSummary

                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ marginRight: 0.40 }}>    CATEGORIES</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Main Category
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Sub Category
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>
                        </div>

                        {/* <ListItemText primary='hi' /> */}
                    </ListItem>
                    <ListItem  >
                        <ListItemIcon >
                            <MailIcon />
                        </ListItemIcon>

                        <div /* style={{ border: 'black' }} */>
                            <Accordion sx={{ borderRadius: 16, borderColor: 'primary', border: '1px solid #ED165F' }}>
                                <AccordionSummary

                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ marginRight: 2 }}>PRODUCTS</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Link to="addProduct" style={{ color: 'black', textDecoration: 'none' }}>
                                        <Typography Typography sx={{ textAlign: 'left' }}>
                                            Add Product
                                        </Typography>
                                    </Link>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Link to="productList" style={{ color: 'black', textDecoration: 'none' }}>
                                        <Typography Typography sx={{ textAlign: 'left' }}>
                                            Product List
                                        </Typography>
                                    </Link>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Grid Product
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Product Details
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        {/* <ListItemText primary='hi' /> */}
                    </ListItem>
                    <ListItem  >
                        <ListItemIcon >
                            <MailIcon />
                        </ListItemIcon>

                        <div /* style={{ border: 'black' }} */>
                            <Accordion sx={{ borderRadius: 16, borderColor: 'primary', border: '1px solid #ED165F' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ marginRight: 4.75 }}>ORDERS</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        New Order
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Order History
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Order Details
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ textAlign: 'left' }}>
                                        Invoice
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        {/* <ListItemText primary='hi' /> */}
                    </ListItem>

                    <ListItem  >
                        <ListItemIcon >
                            <MailIcon />
                        </ListItemIcon>

                        <div /* style={{ border: 'black' }} */>
                            <Accordion sx={{ borderRadius: 16, borderColor: 'primary', border: '1px solid #ED165F' }}>
                                <AccordionSummary

                                >
                                    <Typography sx={{ marginRight: 7.10 }}>REVIEWS</Typography>
                                </AccordionSummary>




                            </Accordion>
                        </div>

                        {/* <ListItemText primary='hi' /> */}
                    </ListItem>


                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <Outlet />

                <p style={{ textAlign: 'center', marginTop: 40 }}>Copyright 2022SHOPPING Dashboard. All Rights Reserved</p>
            </Box>
        </Box>
    );
}






