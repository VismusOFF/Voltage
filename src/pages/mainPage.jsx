import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Info from "./info";
import './pages.css';
import DeliveryInfo from "./delivery/delivery";
import Offers from "./offers/offers";
import Guarantee from "./guarantee/guarantee";
import NavigationComponent from "./navigation/navigation";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Эмуляция загрузки данных
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Задержка в 2 секунды для демонстрации

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <div className="info">
        <Info />
        <div className="transitionWhite"></div>
      </div>
      <DeliveryInfo />
      <Offers />
      <Guarantee />
      <NavigationComponent />
    </Box>
  );
};

export default MainPage;
