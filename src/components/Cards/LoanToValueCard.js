import React from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../Buttons/Button'

const LoanToValueCard = ({ loanToValue }) => {
  return (
    <Box
      marginTop={2}
      padding="1rem"
      border="1.6px solid #E9DCFA"
      borderRadius={(theme) => theme.shape.borderRadius}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight="medium"
            color={(theme) => theme.palette.grey.main}
          >
            Loan to Value
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            marginTop={1}
            color={(theme) => theme.palette.primary.main}
          >
            {loanToValue}!!
          </Typography>
        </Box>

        <Button text="Learn More" variant="secondary" size="small" />
      </Box>
    </Box>
  )
}

export default LoanToValueCard
