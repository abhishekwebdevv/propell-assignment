import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../components/Buttons/Button'
import FundCard from '../components/Cards/FundCard'
import UnmarkFundsDrawer from '../components/Drawers/UnmarkFundsDrawer'

const MarkedMutualFunds = ({ data }) => {
  const [openUnmarkFundsDrawer, setOpenUnmarkFundsDrawer] = useState(false)

  return (
    <>
      <Box mt={2} paddingBottom={8}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="body1"
            fontWeight="medium"
            color={(theme) => theme.palette.grey.main}
          >
            Marked Mutual Funds-
          </Typography>

          <Button
            text="Unmark Funds"
            variant="error"
            size="small"
            onClick={() => setOpenUnmarkFundsDrawer(true)}
          />
        </Box>

        <Box padding="16px 0px">
          {data.map((item) => (
            <FundCard item={item} key={item.scheme_name} />
          ))}
        </Box>
      </Box>

      <UnmarkFundsDrawer
        open={openUnmarkFundsDrawer}
        setOpen={setOpenUnmarkFundsDrawer}
      />
    </>
  )
}

export default MarkedMutualFunds
