import { Container, Typography, Box } from "@mui/material";
import './guaranteeIcon.css'

const Guarantee = () => {

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', mt: '100px'}}>
           <Box sx={{backgroundColor: '#D9D9D9', borderRadius: '50px', position: 'relative', height: '500px'}}>
                <Typography sx={{ml: '35px', mt: '50px'}} variant="h2">Гарантия</Typography>
                <Typography sx={{ml: '35px', mt: '45px'}}>ЫЫЫЫЫЫЫЫЫЫАЫ</Typography>
                <div className="guaranteeIcon"></div>
            </Box>
        </Container>
    )
}

export default Guarantee;