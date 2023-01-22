import React from 'react'
import { Box, Dialog, Grid, Typography } from '@mui/material'
import Button from '../Buttons/Button'
import image from '../../Assets/exclaimation.png'

const AreYouSureDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open}>
      <Box padding={2}>
        <Typography align="center" variant="body2" fontWeight="medium">
          Are you sure you want to unmark these funds as collateral?
        </Typography>
        <img src={image} alt="Exclaimation" width="100%" />
        <Typography
          align="center"
          variant="subtitle1"
          color={(theme) => theme.palette.grey.main}
        >
          Your Credit line value will decrease.{' '}
        </Typography>
        <Typography align="center" variant="subtitle1">
          New Credit Line Value <span style={{ fontWeight: 600 }}>₹ 23000</span>
        </Typography>
        <Grid container columnSpacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              text="Go Back"
              variant="primary"
              size="small"
              onClick={handleClose}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              text="Confirm"
              variant="error"
              solid
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  )
}

export default AreYouSureDialog
