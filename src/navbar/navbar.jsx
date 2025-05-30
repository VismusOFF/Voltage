import { Container, Box, Typography, Button } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import { Link } from "react-router-dom";
import { auth } from '../assets/firebase';
import { useState, useEffect } from "react";
import './navbar.css'

const Navbar = () => {
    const [userEmail, setUserEmail] = useState(null);

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
                        <Link to={'/signin'}>
                            <Button variant="contained">Войти</Button>
                        </Link>
                    </>
                )}
            </Box>
        </Container>
        </div>
    );
}

export default Navbar;
