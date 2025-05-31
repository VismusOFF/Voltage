import { useState } from 'react'
import MainPage from './pages/mainPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import Request from './components/request/request'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ShopPage from './pages/shopPage'


function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',  // Изменено на 'light'
      primary: {
        main: '#ed2f2a',
        dark: '#e22a16',
      },
      background: {
        default: '#ffffff',  // Белый цвет фона
        paper: '#f5f5f5',    // Светло-серый цвет для бумаги
      },
      text: {
        primary: '#000000',  // Черный текст
        secondary: '#424242', // Темно-серый текст для вторичных элементов
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#ed2f2a',
            '&:hover': {
              backgroundColor: '#e22a16',
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
          <Route element={<Request />} path='/request' />
          <Route element={<ShopPage/>} path='/shop' />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
