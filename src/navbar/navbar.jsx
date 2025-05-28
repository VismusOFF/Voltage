import { Container, Box, Typography, Button } from "@mui/material";
import VoltageIcon from "../assets/VoltageIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <VoltageIcon />
                <Typography variant="h3" sx={{ marginLeft: '10px' }}>Voltage</Typography>
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
                <Link to={'/request'}>
                    <Button variant="contained">Подать заявку</Button>
                </Link>
                <Link to={'/signin'}>
                    <Button variant="contained">Войти</Button>
                </Link>
                <Link to={'/signup'}>
                    <Button variant="contained">Зарегистрироваться</Button>
                </Link>
            </Box>
        </Container>
    );
}

export default Navbar;
