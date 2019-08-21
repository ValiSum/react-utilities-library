import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RatingIcon from './components/RatingIcon/RatingIcon'

const RatingStyled = styled.div`
  display: flex;
`

const Rating = ({ number }) => (
  <RatingStyled>
    {Array(number)
      .fill()
      .map((_, starIndex) => (
        <RatingIcon key={starIndex + 1} />
      ))}
  </RatingStyled>
)

const RatingPropTypes = {
  /** Star number */
  number: PropTypes.number
}

Rating.propTypes = RatingPropTypes

Rating.defaultProps = {
  name: 'Rating'
}

export { Rating as default, RatingPropTypes }
