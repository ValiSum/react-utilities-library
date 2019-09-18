import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RatingIcon from './components/RatingIcon/RatingIcon'

const RatingStyled = styled.div`
  display: flex;
`

const Rating = ({ size, color, onRating }) => {
  const [selectedStar, setSelectedStar] = useState({
    index: 0,
    starType: 'empty'
  })
  const [clickedStar, setClickedStar] = useState({
    index: 0,
    starType: 'empty'
  })
  const [rating, setRating] = useState(0)

  const onMouseOver = starSelected => setSelectedStar(starSelected)

  const onMouseLeave = () => setSelectedStar(clickedStar)

  const onClick = () => setClickedStar(selectedStar)

  useEffect(() => {
    onRating(clickedStar)
  }, [clickedStar])

  const getStar = starIndex => {
    const numberOfFullStars = Math.floor(selectedStar.index)
    let starType = 'empty'

    if (starIndex < numberOfFullStars) {
      starType = 'full'
    } else if (starIndex === numberOfFullStars) {
      starType = selectedStar.starType
    }
    return (
      <RatingIcon
        key={starIndex}
        index={starIndex}
        onMouseOver={onMouseOver}
        onClick={onClick}
        starType={starType}
        size={size}
        color={color}
      />
    )
  }

  return (
    <RatingStyled onMouseLeave={onMouseLeave}>
      {Array(5)
        .fill()
        .map((_, starIndex) => getStar(starIndex + 1))}
    </RatingStyled>
  )
}

const RatingPropTypes = {
  /** Star size */
  size: PropTypes.number,
  /** Star color */
  color: PropTypes.string,
  /** Function */
  onRating: PropTypes.func
}

Rating.propTypes = RatingPropTypes

Rating.defaultProps = {
  size: 30,
  color: 'orange',
  onRating: Function.prototype
}

export { Rating as default, RatingPropTypes }
