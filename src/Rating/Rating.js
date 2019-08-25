import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RatingIcon from './components/RatingIcon/RatingIcon'

const RatingStyled = styled.div`
  display: flex;
`

const Rating = ({ number, size, color }) => {
  const [selectedStar, setSelectedStar] = useState({
    index: 1,
    starType: 'empty'
  })

  const onMouseOver = starSelected => {
    setSelectedStar(starSelected)
  }

  const getStar = starIndex => {
    console.log(selectedStar)
    const numberOfFullStars = Math.floor(selectedStar.index)
    let starType = 'empty'

    if (starIndex < numberOfFullStars) {
      starType = 'full'
    } else if (starIndex === numberOfFullStars) {
      starType = selectedStar.starType
    }

    console.log(starType, starIndex)
    return (
      <RatingIcon
        key={starIndex}
        index={starIndex}
        onMouseOver={onMouseOver}
        starType={starType}
        size={size}
        color={color}
      />
    )
  }

  return (
    <RatingStyled>
      {Array(number)
        .fill()
        .map((_, starIndex) => getStar(starIndex + 1))}
    </RatingStyled>
  )
}

const RatingPropTypes = {
  /** Star number */
  number: PropTypes.number,
  /** Star size */
  size: PropTypes.number,
  /** Star color */
  color: PropTypes.string
}

Rating.propTypes = RatingPropTypes

Rating.defaultProps = {
  number: 5,
  size: 30,
  color: 'orange'
}

export { Rating as default, RatingPropTypes }
