import React, { useState }  from 'react'
import { Box, Container, Typography, Button } from '@mui/material'

import useStyles from './HeroStyles'
import HeroModal from '../HeroModal'

const Hero = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <Box className={classes.hero}>
            <Container className={classes.container}>
                <Box className={classes.header}>
                    <Typography variant="h3">Find your mind with the best</Typography>
                    <Typography variant="body1" style={{marginTop: 15}}>Grow, learn, and become more successful by reading some of the top article by highly reputable individuals.</Typography>
                    <Box style={{ marginTop: 20}}>
                        <Button variant="contained" size="large" onClick={handleOpen}>Login</Button>
                    </Box>
                </Box>
                <HeroModal setOpen={setOpen} open={open}/>
            </Container>
        </Box>
    )
}

export default Hero
