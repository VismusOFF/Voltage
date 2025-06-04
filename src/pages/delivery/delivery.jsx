import { Typography, Box } from "@mui/material";
import { Container, flex } from "@mui/system"
import './deliveryIcon.css'

const DeliveryInfo = () => {


    return (
        <Container sx={{ backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h2">Транспартировка</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '50px'}}>
                <Box sx={{width: '550px', height: '370px', backgroundColor: '#E7E5E5', borderRadius: '35px', position: 'relative'}}>
                    <Typography variant="h4" sx={{mt: '35px', ml: '35px'}}>Бесплатная доставка</Typography>
                    <Typography variant="h5" sx={{ml: '35px', mr: '55px', mt: '35px', color: '#5E5C5C'}}>Доставка будет беслпатной при заказе от 50 лар.</Typography>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '250px', color: '#5E5C5C', ml: '35px', mt: '20px'}} variant="h5">При заказе менее чем 50 лар стоимость доставки составит от 10 лар и более.</Typography>
                        <div className="car-icon"></div>
                    </Box>
                </Box>
                <Box sx={{width: '550px', height: '370px', backgroundColor: '#E7E5E5', borderRadius: '35px', position: 'relative'}}>
                    <Typography variant="h4" sx={{mt: '35px', ml: '35px'}}>Пункты выдачи</Typography>
                    <Typography variant="h5" sx={{ml: '35px', mr: '55px', mt: '35px', color: '#5E5C5C'}}>Заказ можно получить в часы работы шинного центра.</Typography>
                    <Box sx={{display: 'flex'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                            <Typography sx={{width: '280px', color: '#5E5C5C', ml: '35px', mt: '20px'}} variant="h5">После прибытия заказа покупатель получит оповещение. </Typography>
                            <Typography sx={{width: '280px', color: '#5E5C5C', ml: '35px',}} variant="h5">Доставка до шинного центра – бесплатная.</Typography>
                        </Box>
                        <div className="shop-icon"></div>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '50px', color: 'white'}}>
                <Box sx={{backgroundColor: '#121212', width:'300px',height:'300px', borderRadius: '35px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }}}>
                    <div className="express-icon"></div>
                    <Typography variant="h4">Экспресс</Typography>
                </Box>
                <Box sx={{backgroundColor: '#121212', width:'300px',height:'300px', borderRadius: '35px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }}}>
                    <div className="standart-icon"></div>
                    <Typography variant="h4">Стандарт</Typography>
                </Box>
                <Box sx={{backgroundColor: '#121212', width:'300px',height:'300px', borderRadius: '35px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }}}>
                    <div className="pickup-icon"></div>
                    <Typography variant="h4">Самовывоз</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default DeliveryInfo;