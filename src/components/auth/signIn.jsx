import { Container, TextField, Box, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

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
        onSubmit={handleSubmit}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField 
          variant="outlined" 
          label="Пароль" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormControlLabel sx={{color: 'white'}}
          control={
            <Checkbox 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
              color="primary" 
            />
          } 
          label="Запомнить меня" 
        />
        <Button type="submit" variant="contained" size="large">
          Войти
        </Button>
      </Box>
    </Container>
  )
}

export default SignIn;
