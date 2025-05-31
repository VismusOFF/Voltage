import { AddBoxRounded } from "@mui/icons-material";
import { Container, Box } from "@mui/material";

const Info = () => {
    return (
        <Container sx={{mt: '40px', display: 'flex', pb: '50px' }}>
            {/* Основной контейнер с красным фоном */}
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '850px', }}>
                {/* Контейнер с синим фоном, который занимает всю ширину */}
                <Box sx={{ backgroundColor: '#080A77', borderRadius: '35px', mb: '25px',height: '400px', width: '850px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>

                </Box>
                {/* Контейнер для двух карточек с зеленым и красным фоном */}
                <Box sx={{ display: 'flex' }}>
                    <Box 
                        sx={{ 
                            backgroundColor: '#A8F000',
                            width: '412.5px',  
                            height: '100px', 
                            borderRadius: '25px', 
                            mr: '25px', 
                            transition: 'transform 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                    </Box>
                    <Box 
                        sx={{ 
                            backgroundColor: '#EF3123',
                            width: '412.5px',  
                            height: '100px', 
                            borderRadius: '25px', 
                            transition: 'transform 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                    </Box>
                </Box>
            </Box>
            {/* Второй контейнер с белым фоном */}
            <Box sx={{ height: '500px', ml: '25px' }}>
                <Box sx={{ backgroundColor: '#9EDFFF', width: '270px', height: '250px', mb: '25px', borderRadius: '35px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                </Box>
                <Box sx={{ backgroundColor: '#B3CCFF', width: '270px', height: '250px', borderRadius: '35px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                </Box>
            </Box>
            
        </Container>
    );
};

export default Info;
