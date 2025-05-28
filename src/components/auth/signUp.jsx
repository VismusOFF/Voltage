import { Container, TextField, Box, Button, FormControlLabel, Checkbox } from "@mui/material";


const SignUp = () => {


    return (
        <Container 
            sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
            }}>
            <Box 
                component="form" 
                sx={{ 
                    padding: '40px', 
                    width: '500px', 
                    margin: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2, 
                }}
            >
                <TextField 
                variant="outlined" 
                label="Почта" 
                type="email"
                required
                />
                <TextField 
                variant="outlined" 
                label="Пароль" 
                type="password"
                required
                />
                <TextField 
                variant="outlined" 
                label="Подтвердите пароль" 
                type="password"
                required
                />
                
                <Button type="submit" variant="contained" size="large">
                Зарегистрироваться
                </Button>
            </Box>
    </Container>
    )
}

export default SignUp;