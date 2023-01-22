import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const FundCard = ({ item }) => {
  return (
    <Box
      marginTop={1}
      padding={2}
      border="1.6px solid"
      borderColor={(theme) => theme.palette.primary.light}
      borderRadius={(theme) => theme.shape.borderRadius}
    >
      <Typography variant="body1" fontWeight="medium">
        {item.scheme_name}
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={2} marginTop={1}>
        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            color={(theme) => theme.palette.grey.main}
          >
            Current Value
          </Typography>
          <Typography
            fontWeight="medium"
            color={(theme) => theme.palette.secondary.main}
          >
            &#36;{parseInt(item.current_value).toFixed(2)}
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            color={(theme) => theme.palette.grey.main}
          >
            Units
          </Typography>
          <Typography fontWeight="medium">
            {parseInt(item.units).toFixed(2)}
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            color={(theme) => theme.palette.grey.main}
          >
            Folio Number
          </Typography>
          <Typography
            fontWeight="medium"
            color={(theme) => theme.palette.primary.main}
          >
            {parseInt(item.folio_number).toFixed(2)}
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            color={(theme) => theme.palette.grey.main}
          >
            Nav
          </Typography>
          <Typography
            fontWeight="medium"
            color={(theme) => theme.palette.primary.main}
          >
            &#36;{parseInt(item.nav).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FundCard
