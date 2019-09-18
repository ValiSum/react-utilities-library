/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StarBorder, StarHalf, Star } from '@material-ui/icons'

const Container = styled.div`
  position: relative;
  height: 100%;
  line-height: 0;
`

const LeftHalfOfIcon = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
`

const RightHalfOfIcon = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
`
const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  & svg {
    font-size: ${props => props.size}px;
    color: ${props => props.color};
  }
`

const getStarType = starType =>
  ({
    empty: <StarBorder />,
    half: <StarHalf />,
    full: <Star />
  }[starType])

const RatingIcon = ({ index, onMouseOver, onClick, starType, size, color }) => (
  <Container>
    <LeftHalfOfIcon
      onMouseOver={() => onMouseOver({ index, starType: 'half' })}
      onClick={onClick}
    />
    <RightHalfOfIcon
      onMouseOver={() => onMouseOver({ index, starType: 'full' })}
      onClick={onClick}
    />
    <IconContainer size={size} color={color}>
      {getStarType(starType)}
    </IconContainer>
  </Container>
)

export default RatingIcon
