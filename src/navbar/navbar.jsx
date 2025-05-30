import { Container, Box, Typography, Button, Drawer, IconButton } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import { auth } from '../assets/firebase';
import { useState, useEffect } from "react";
import './navbar.css';

const Navbar = () => {
    const [userEmail, setUserEmail] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 450,
                backgroundColor: '#FFFFFF',
                padding: '30px',
                height: '100%',
            }}
            role="presentation"
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">
                    Выберите способ входа
                </Typography>
                <IconButton onClick={toggleDrawer(false)} sx={{ color: '#000000', width: '40px', height: '40px' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Link to={'/signin'} className="auth-link" style={{ textDecoration: 'none' }} onClick={toggleDrawer(false)}>
                <div className="auth-container-button" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '20px' }}>
                    <div className="icon-auth">
                        <BoltIcon sx={{ color: '#EF3123', fontSize: 40 }} />
                    </div>
                    <Typography sx={{ ml: '10px', flexGrow: 1 }}>
                        Войти в Voltage-Онлайн
                    </Typography>
                    <ArrowForwardIosIcon sx={{ color: '#000000', fontSize: 20, mr: '30px' }} />
                </div>
            </Link>
        </Box>
    );

    return (
        <div className="navbar">
            <Container
                sx={{
                    height: '80px',
                    backgroundColor: '#121212',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 20px',
                }}
            >
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <BoltIcon sx={{ color: '#EF3123', fontSize: 50 }} />
                </Link>

                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        marginLeft: '20px',
                    }}
                >
                    {[
                        { text: 'Частным лицам', path: '/request' },
                        { text: 'Малому бизнесу', path: '#' },
                        { text: 'Среднему и крупному бизнесу', path: '#' }
                    ].map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    transition: 'background-color 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#2B2B2E',
                                        cursor: 'pointer'
                                    },
                                    userSelect: 'none'
                                }}
                                variant="body1"
                            >
                                {item.text}
                            </Typography>
                        </Link>
                    ))}
                </Box>

                <Box
                    sx={{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px'
                    }}
                >
                    {userEmail ? (
                        <>
                            <Typography variant="body1">{userEmail}</Typography>
                            <Button variant="text" onClick={() => auth.signOut()} sx={{ color: 'white' }}>
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link to={'/signup'}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#2D2D2F',
                                        '&:hover': {
                                            backgroundColor: '#323234',
                                        }
                                    }}
                                >
                                    Зарегистрироваться
                                </Button>
                            </Link>
                            <Link to={'#'} onClick={toggleDrawer(true)}>
                                <Button variant="contained">Войти</Button>
                            </Link>
                        </>
                    )}
                </Box>
            </Container>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </div>
    );
}

export default Navbar;
