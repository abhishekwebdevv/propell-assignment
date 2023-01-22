import React, { useState } from 'react'
import { Drawer, Typography, Box } from '@mui/material'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../Buttons/Button'
import MututalFundCard from '../Cards/MutualFundCard'
import AreYouSureDialog from '../Dialogs/AreYouSureDialog'

const UnmarkFundsDrawer = ({ open, setOpen }) => {
  const [openDialog, setOpenDialog] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

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
        position="relative"
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
            <Typography variant="h5" fontWeight="medium">
              Unmark Funds as collateral
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.grey.main}
            >
              Select the funds you wish to unmark as collateral
            </Typography>
          </Box>

          <Box marginTop="0.6rem">
            <Typography
              variant="body1"
              fontWeight="medium"
              color={(theme) => theme.palette.grey.main}
            >
              List of Mutual Funds-
            </Typography>

            <Box paddingBottom={16}>
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
              <MututalFundCard />
            </Box>
          </Box>
        </Box>

        <Box
          padding={2}
          boxSizing="border-box"
          boxShadow="0px -4px 9px -1px rgba(0,0,0,0.33)"
          position="fixed"
          bottom={0}
          left={0}
          width="100%"
          backgroundColor="#fff"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1">New Credit Line Value</Typography>
            <Typography variant="body1" fontWeight="medium">
              &#8377; 23000
            </Typography>
          </Box>

          <Box marginTop={1}>
            <Button
              variant="error"
              text="Unmark Funds"
              fullWidth
              solid
              size="medium"
              onClick={() => setOpenDialog(true)}
            />
          </Box>
        </Box>
      </Box>

      <AreYouSureDialog open={openDialog} setOpen={setOpenDialog} />
    </Drawer>
  )
}

export default UnmarkFundsDrawer
