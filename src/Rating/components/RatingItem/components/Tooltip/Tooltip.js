import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const TooltipText = styled.span`
  width: 100%;
  text-align: center;
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 5px;
  top: -26px;
  line-height: 1.3;
  ::after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`

const Tooltip = ({ children, show, text }) => (
  <Container>
    {show && <TooltipText>{text}</TooltipText>}
    {children}
  </Container>
)

export default Tooltip
