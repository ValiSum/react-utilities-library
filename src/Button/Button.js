import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  color: red;
`

const Button = ({ name }) => <ButtonStyled>{name}</ButtonStyled>

Button.propTypes = {
  /** Name */
  name: PropTypes.string
}

Button.defaultProps = {
  name: 'Button'
}

export { Button }
