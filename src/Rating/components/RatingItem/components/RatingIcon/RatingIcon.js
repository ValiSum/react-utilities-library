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

const getIconType = type =>
  ({
    empty: <StarBorder />,
    half: <StarHalf />,
    full: <Star />
  }[type])

const RatingIcon = ({ index, onMouseOver, onClick, type, size, color }) => (
  <Container>
    <LeftHalfOfIcon
      onMouseOver={() => onMouseOver({ index, type: 'half' })}
      onClick={onClick}
    />
    <RightHalfOfIcon
      onMouseOver={() => onMouseOver({ index, type: 'full' })}
      onClick={onClick}
    />
    <IconContainer size={size} color={color}>
      {getIconType(type)}
    </IconContainer>
  </Container>
)

RatingIcon.propTypes = {
  /** */
  index: PropTypes.number.isRequired,
  /** */
  onMouseOver: PropTypes.func,
  /** */
  onClick: PropTypes.func,
  /** */
  type: PropTypes.string.isRequired,
  /** */
  size: PropTypes.number.isRequired,
  /** */
  color: PropTypes.string.isRequired
}

RatingIcon.defaultProps = {
  onMouseOver: Function.prototype,
  onClick: Function.prototype
}

export default RatingIcon
