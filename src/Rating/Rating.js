import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import {
  faStar as fullStar,
  faStarHalfAlt as halfStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RatingStyled = styled.div``

const Rating = ({ name }) => (
  <RatingStyled>
    <div>{name}</div>
    <FontAwesomeIcon icon={fullStar} />
    <FontAwesomeIcon icon={fullStar} />
    <FontAwesomeIcon icon={fullStar} />
    <FontAwesomeIcon icon={halfStar} />
    <FontAwesomeIcon icon={emptyStar} />
  </RatingStyled>
)

const RatingPropTypes = {
  /** Name */
  name: PropTypes.string
}

Rating.propTypes = RatingPropTypes

Rating.defaultProps = {
  name: 'Rating'
}

export { Rating as default, RatingPropTypes }
