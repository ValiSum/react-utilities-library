import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  color: red;
`

const Button = ({ name }) => <ButtonStyled>{name}</ButtonStyled>

const ButtonPropTypes = {
  /** Name */
  name: PropTypes.string
}

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  name: 'Button'
}

export { Button as default, ButtonPropTypes }
