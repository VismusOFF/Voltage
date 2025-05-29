import React from "react";
import { Box, Typography } from "@mui/material";
import myImage from '../assets/elegant-uber-driver-giving-taxi-ride.png';
import secondImage from '../assets/vnimanie-k-detalam-casticnyi-vid-sovremennogo-roskosnogo-belogo-avtomobila-priparkovannogo-v-pomesenii-v-dnevnoe-vrema-Photoroom.png'; // Путь ко второй картинке

const MainPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between", // Выравниваем содержимое между двумя краями
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: 0, // Убираем отступы
        margin: 0, // Убираем внешние отступы
      }}
    >
      {/* Вторая картинка справа */}
      <Box
        component="img"
        src={secondImage} // Вторая картинка теперь справа
        alt="Вторая картинка"
        sx={{
          maxWidth: "40%", // Уменьшаем размер второй картинки
          height: "auto",
          display: "block",
          margin: 0, // Убираем отступы
          padding: 0, // Убираем внутренние отступы
        }}
      />

      {/* Первая картинка слева */}
      <Box
        component="img"
        src={myImage}
        alt="Мерседес - автомастерская"
        sx={{
          maxWidth: "30%", // Уменьшаем размер картинки
          height: "auto",
          display: "block",
          margin: 0, // Убираем отступы
          padding: 0, // Убираем внутренние отступы
        }}
      />
    </Box>
  );
};

export default MainPage;
