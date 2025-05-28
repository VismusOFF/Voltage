import { useState } from 'react'
import MainPage from './pages/mainPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import Request from './components/request/request'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#DE1734',
        dark: '#DF1A31',
      },
      background: {
        default: '#121212',
        paper: '#1E1E1E',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#B0BEC5',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#DE1734',
            '&:hover': {
              backgroundColor: '#DF1A31',
            },
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<SignIn />} path='/signin' />
          <Route element={<SignUp />} path='/signup' />
          <Route element={<Request/>} path='/request' />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
