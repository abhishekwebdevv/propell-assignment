import React, { useState } from 'react'
import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import { BiHomeAlt } from 'react-icons/bi'
import { FiPieChart } from 'react-icons/fi'
import { RiAccountCircleLine } from 'react-icons/ri'

import Dashboard from '../../Screens/Dashboard'

const Nav = ({ children, screen, setScreen }) => {
  return (
    <>
      {children}

      <Box
        position="fixed"
        bottom={0}
        left={0}
        boxSizing="border-box"
        backgroundColor="#fff"
        width="100%"
      >
        <Grid container>
          <Grid item xs={4}>
            <ButtonBase
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: 1,
              }}
              onClick={() => setScreen('home')}
            >
              <BiHomeAlt
                size={24}
                style={{
                  color:
                    screen === 'home'
                      ? 'rgb(85, 22, 170)'
                      : 'rgb(129, 129, 165)',
                }}
              />
              <Typography
                variant="subtitle2"
                color={(theme) =>
                  screen === 'home'
                    ? theme.palette.primary.main
                    : theme.palette.grey.main
                }
              >
                Home
              </Typography>
            </ButtonBase>
          </Grid>
          <Grid item xs={4}>
            <ButtonBase
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: 1,
              }}
              onClick={() => setScreen('portfolio')}
            >
              <FiPieChart
                size={24}
                style={{
                  color:
                    screen === 'portfolio'
                      ? 'rgb(85, 22, 170)'
                      : 'rgb(129, 129, 165)',
                }}
              />
              <Typography
                variant="subtitle2"
                color={(theme) =>
                  screen === 'portfolio'
                    ? theme.palette.primary.main
                    : theme.palette.grey.main
                }
              >
                Portfolio
              </Typography>
            </ButtonBase>
          </Grid>
          <Grid item xs={4}>
            <ButtonBase
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: 1,
              }}
              onClick={() => setScreen('profile')}
            >
              <RiAccountCircleLine
                size={24}
                style={{
                  color:
                    screen === 'profile'
                      ? 'rgb(85, 22, 170)'
                      : 'rgb(129, 129, 165)',
                }}
              />
              <Typography
                variant="subtitle2"
                color={(theme) =>
                  screen === 'profile'
                    ? theme.palette.primary.main
                    : theme.palette.grey.main
                }
              >
                Profile
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Nav
