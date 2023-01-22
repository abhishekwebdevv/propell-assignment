import React from 'react'
import { Box, Checkbox, Typography } from '@mui/material'

const MututalFundCard = () => {
  return (
    <Box
      boxShadow=" 0px 4px 5px -3px rgba(0,0,0,0.33)"
      marginTop={1}
      borderRadius={(theme) => theme.shape.borderRadius}
      padding={2}
    >
      <Box display="flex" alignItems="center">
        <Checkbox
          inputProps={{ 'aria-label': 'Checkbox demo' }}
          sx={(theme) => ({
            '& svg': {
              width: 28,
              height: 28,
            },
            color: theme.palette.primary.main,
            '&.Mui-checked': {
              color: theme.palette.primary.main,
            },
          })}
        />

        <Box>
          <Typography variant="subtitle1">SBI Mutual Fund</Typography>
          <Typography
            variant="subtitle1"
            color={(theme) => theme.palette.grey.main}
          >
            Marked Value &#8377; 50000
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MututalFundCard
