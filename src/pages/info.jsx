import { Container, Box, Typography, Button } from "@mui/material";
import './image.css'
import { Link, useNavigate } from "react-router-dom";

const Info = () => {

    const navigate = useNavigate('')

    return (
        <Container sx={{mt: '40px', display: 'flex', pb: '50px' }}>
            {/* Основной контейнер с красным фоном */}
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '850px', }}>
                {/* Контейнер с синим фоном, который занимает всю ширину */}
                <Box sx={{ backgroundColor: '#080A77', borderRadius: '35px', mb: '25px',height: '400px', width: '850px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
                    <div className="image-container">
                        <Box sx={{padding: '50px', height: '300px'}}>
                            <Typography sx={{fontSize: '32px', color: '#CD2311'}}>
                                Выберите подходящие
                            </Typography>
                            <Typography sx={{fontSize: '32px', color: '#CD2311'}}>
                                шины по сезону
                            </Typography>
                            <Typography sx={{fontSize: '32px', color: '#CD2311'}}>
                                здесь
                            </Typography>
                            <Link to={'/shop'}>
                                <Button variant="contained" sx={{marginTop: '115px', fontSize: '20px'}}>
                                    Перейти
                                </Button>
                            </Link>
                        </Box>
                    </div>
                </Box>
                {/* Контейнер для двух карточек с зеленым и красным фоном */}
                <Box sx={{ display: 'flex' }}>
                    <Box className='background-gradient' onClick={() => navigate('/delivery')}
                        sx={{ 
                            backgroundColor: '#A8F000',
                            width: '412.5px',  
                            height: '100px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center', 
                            borderRadius: '25px', 
                            mr: '25px', 
                            transition: 'transform 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                        <Typography sx={{ml: '40px', fontSize: '24px', color: 'white'}}>
                            Транспартировка
                        </Typography>
                        <div className="delivery-image">

                        </div>
                    </Box>
                    <Box className='background-gradient2' onClick={() => navigate('/guarantee')}
                        sx={{ 
                            backgroundColor: '#EF3123',
                            width: '412.5px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',  
                            height: '100px', 
                            borderRadius: '25px', 
                            transition: 'transform 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                        <Typography sx={{ml: '40px', fontSize: '24px', color: 'white'}}>
                            Гарантия
                        </Typography>
                        <div className="guarantee-image">

                        </div>
                    </Box>
                </Box>
            </Box>
            {/* Второй контейнер с белым фоном */}
            <Box sx={{ height: '500px', ml: '25px' }}>
                <Box sx={{ backgroundColor: '#9EDFFF', width: '270px', height: '250px', mb: '25px', borderRadius: '35px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                       <div className="sale-image" onClick={() => navigate('/sale')} >
        
                        </div>
                </Box>
                <Box sx={{ backgroundColor: '#B3CCFF', width: '270px', height: '250px', borderRadius: '35px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                        <div className="navigation-image" onClick={() => navigate('/navigation')}>
                            
                        </div>
                </Box>
            </Box>
            
        </Container>
    );
};

export default Info;
