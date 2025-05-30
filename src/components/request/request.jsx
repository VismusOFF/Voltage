import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Request = () => {
    

    return (
        <Container maxWidth="sm" sx={{mt:"40px"}} >
            <Typography variant="h4" gutterBottom>
                Отправить заявку
            </Typography>
            <form >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        label="Имя"
                        variant="outlined"
                        name="name"
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        type="email"
                        required
                    />
                    <TextField
                        label="Телефон"
                        variant="outlined"
                        name="phone"
                        required
                    />
                    <TextField
                        label="Сообщение"
                        variant="outlined"
                        name="message"
                        multiline
                        rows={4}
                        required
                    />
                    <Button variant="contained" type="submit">
                        Отправить
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default Request;
