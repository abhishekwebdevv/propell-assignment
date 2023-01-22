import React from 'react'
import { ButtonBase, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Button = ({
  text,
  solid,
  variant,
  fullWidth,
  size,
  largeText,
  icon,
  onClick,
  disabled,
}) => {
  const flexStyles = icon && {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  return (
    <ButtonBase
      sx={(theme) => ({
        backgroundColor: theme.palette[variant][solid ? 'main' : 'light'],
        padding: `${
          size === 'small'
            ? '0.6rem 1.5rem'
            : size === 'medium'
            ? '0.8rem 2rem'
            : '1rem 2rem'
        }`,
        borderRadius: '2rem',
        width: fullWidth && '100%',
        ...flexStyles,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography
        fontSize={(theme) => theme.typography[largeText ? 'body2' : 'body1']}
        fontWeight="medium"
        color={(theme) => (solid ? '#fff' : theme.palette[variant].main)}
      >
        {text}
      </Typography>
      {icon && icon}
    </ButtonBase>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  solid: PropTypes.bool,
  variant: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  smallPadding: PropTypes.bool,
}

export default Button
