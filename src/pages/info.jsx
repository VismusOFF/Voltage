import { Container } from "@mui/material";

const Info = () => {
    return (
        <Container sx={{mt: '40px', display: 'flex', pb: '50px' }}>
            {/* Основной контейнер с красным фоном */}
            <Container sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {/* Контейнер с синим фоном, который занимает всю ширину */}
                <Container sx={{ backgroundColor: '#080A77', flex: '1', borderRadius: '15px', mb: '50px', width: '720px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>

                </Container>
                {/* Контейнер для двух карточек с зеленым и красным фоном */}
                <Container sx={{ display: 'flex' }}>
                    <Container 
                        sx={{ 
                            backgroundColor: '#A8F000',
                            width: '350px',  
                            height: '100px', 
                            borderRadius: '15px', 
                            mr: '25px', 
                            transition: 'transform 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                    </Container>
                    <Container 
                        sx={{ 
                            backgroundColor: '#EF3123',
                            width: '350px',  
                            height: '100px', 
                            borderRadius: '15px', 
                            transition: 'transform 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                    </Container>
                </Container>
            </Container>
            {/* Второй контейнер с белым фоном */}
            <Container sx={{ height: '500px', }}>
                <Container sx={{ backgroundColor: '#9EDFFF', width: '250px', height: '235px', mb: '25px', borderRadius: '15px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                </Container>
                <Container sx={{ backgroundColor: '#B3CCFF', width: '250px', height: '235px', borderRadius: '15px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                </Container>
            </Container>
            <Container>
                
            </Container>

            
        </Container>
    );
};

export default Info;
