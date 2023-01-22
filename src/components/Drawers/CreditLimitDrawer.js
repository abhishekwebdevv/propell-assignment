import React from 'react'
import { Drawer, Typography, Box } from '@mui/material'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Button from '../Buttons/Button'

const CreditLimitDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }

  const BtnIcon = () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '100%',
        padding: '0.2rem',
      }}
    >
      <IoIosArrowForward size={20} />
    </Box>
  )

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{ '& .MuiPaper-root': { width: '100%' } }}
    >
      <Box
        padding={2}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{ cursor: 'pointer' }}
            onClick={handleClose}
          >
            <IoIosArrowBack size={20} />
            <Typography variant="body1"> Back</Typography>
          </Box>

          <Box marginTop={2}>
            <Typography variant="h4" fontWeight="medium">
              Increase your credit limit
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.grey.main}
            >
              Mark additional funds as collateral to increase your credit limit
              futher.
            </Typography>
          </Box>

          <Box marginTop={2}>
            <Button
              variant="primary"
              text="Fetch my Kfin portfolio"
              fullWidth
              size="medium"
              icon={<BtnIcon />}
            />
          </Box>

          <Box marginTop={2}>
            <Button
              variant="primary"
              text="Fetch my CMAS portfolio"
              fullWidth
              size="medium"
              icon={<BtnIcon />}
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            align="center"
            maxWidth="70%"
            variant="body1"
            color={(theme) => theme.palette.grey.main}
          >
            Make sure your overall MF portfoli is greater than Rs 25,000.
          </Typography>
          <Box marginTop={2} width="100%">
            <Button
              variant="grey"
              size="medium"
              text="Fetch my portfolio"
              fullWidth
              disabled
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default CreditLimitDrawer
