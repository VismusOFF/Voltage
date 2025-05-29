import { Container, Box, Typography, Button } from "@mui/material";
import VoltageIcon from "../assets/VoltageIcon";
import { Link } from "react-router-dom";
import { auth } from '../assets/firebase';
import { useState, useEffect } from "react";

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
        <Container 
            sx={{
                minWidth: '100%', 
                height: '80px', 
                backgroundColor: '#121212', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center',
                padding: '0 20px'
            }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VoltageIcon />
                    <Typography variant="h3" sx={{ marginLeft: '10px' }}>Voltage</Typography>
                </Box>
            </Link>

            <Box 
                sx={{ 
                    marginLeft: 'auto', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    padding: '10px' 
                }}
            >
                <Link to={'/request'}>
                    <Button variant="contained">Подать заявку</Button>
                </Link>
                
                {userEmail ? (
                    <>
                        <Typography variant="body1">{userEmail}</Typography>
                        <Button variant="text" onClick={() => auth.signOut()}>Выйти</Button>
                    </>
                ) : (
                    <>
                        <Link to={'/signin'}>
                            <Button variant="contained">Войти</Button>
                        </Link>
                        <Link to={'/signup'}>
                            <Button variant="contained">Зарегистрироваться</Button>
                        </Link>
                    </>
                )}
            </Box>
        </Container>
    );
}

export default Navbar;
