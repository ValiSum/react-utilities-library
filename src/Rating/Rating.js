import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as EmptyStar } from './assets/empty-star.svg'
import { ReactComponent as HalfStar } from './assets/half-star.svg'
import { ReactComponent as FullStar } from './assets/full-star.svg'

const RatingStyled = styled.div`
  border: 1px solid black;
  height: 50px;
`

const Rating = ({ name }) => (
  <RatingStyled>
    {name}
    <EmptyStar />
    <HalfStar />
    <FullStar />
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
