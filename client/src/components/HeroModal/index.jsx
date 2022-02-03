import React from 'react'
import { Box, Modal } from '@mui/material'

import useStyles from './HeroModalStyles'

const HeroModal = ({open, setOpen}) => {
    const classes = useStyles()

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className={classes.heromodal}>
                content...
            </Box>
        </Modal>
    )
}

export default HeroModal

