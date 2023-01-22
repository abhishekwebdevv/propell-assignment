import React from 'react'
import { Box, Typography } from '@mui/material'

const PortfolioValueCard = ({ totalValue }) => {
  return (
    <Box
      marginTop={2}
      padding="1.4rem 1rem"
      border="1px solid black"
      borderRadius={(theme) => theme.shape.borderRadius}
    >
      <Typography
        variant="subtitle1"
        fontWeight="medium"
        color={(theme) => theme.palette.grey.main}
      >
        Total Portfolio Value
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        marginTop={1}
        color={(theme) => theme.palette.secondary.main}
      >
        &#8377; {totalValue.toFixed(2)}
      </Typography>
    </Box>
  )
}

export default PortfolioValueCard
