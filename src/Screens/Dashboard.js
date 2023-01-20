import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { AiOutlineBell } from 'react-icons/ai'

const Dashboard = () => {
  return (
    <Box padding={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold" fontSize={14}>
          <span style={{ opacity: 0.6 }}>Welcome</span> Rahul
        </Typography>
        <IconButton>
          <AiOutlineBell
            size={22}
            style={{
              color: '#5516aa',
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Dashboard
