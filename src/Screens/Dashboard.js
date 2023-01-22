import React, { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { AiOutlineBell } from 'react-icons/ai'

import PortfolioValueCard from '../components/Cards/PortfolioValueCard'
import LoanToValueCard from '../components/Cards/LoanToValueCard'
import Button from '../components/Buttons/Button'
import MarkedMutualFunds from '../Sections/MarkedMutualFunds'
import CreditLimitDrawer from '../components/Drawers/CreditLimitDrawer'

const getTotalPortfolioValue = (portfolio) => {
  return portfolio.reduce((a, b) => a + (b['current_value'] || 0), 0)
}

const Dashboard = ({ data }) => {
  const [openCreditLimitDrawer, setOpenCreditLimitDrawer] = useState(false)

  return (
    <>
      <Box padding={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            <Typography
              component="span"
              color={(theme) => theme.palette.grey.main}
              fontWeight="bold"
            >
              Welcome
            </Typography>{' '}
            Rahul
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

        <PortfolioValueCard totalValue={getTotalPortfolioValue(data.portfolio)} />
        <LoanToValueCard loanToValue={data.loan_to_value} />

        <Box marginTop={2}>
          <Button
            text="Increase credit limit"
            variant="primary"
            fullWidth
            largeText
            solid
            size="large"
            onClick={() => setOpenCreditLimitDrawer(true)}
          />
        </Box>

        <MarkedMutualFunds data={data.portfolio} />
      </Box>

      <CreditLimitDrawer
        open={openCreditLimitDrawer}
        setOpen={setOpenCreditLimitDrawer}
      />
    </>
  )
}

export default Dashboard
