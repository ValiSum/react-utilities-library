import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useDidMountEffect from './utils/useDidMountEffect'
import Tooltip from './components/Tooltip/Tooltip'
import RatingIcon from './components/RatingIcon/RatingIcon'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const RatingStyled = styled.div`
  display: flex;
`

const RatingInfo = styled.span`
  margin-left: 5px;
  min-width: 30px;
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

  const getRating = () => {
    if (selectedStar.starType === 'half') {
      return selectedStar.index * 2 - 1
    }
    if (selectedStar.starType === 'full') {
      return selectedStar.index * 2
    }

    return selectedStar.index
  }

  useDidMountEffect(() => {
    setRating(getRating())
  }, [selectedStar])

  useDidMountEffect(() => {
    onRating(rating)
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
      <Tooltip
        key={starIndex}
        show={starIndex === selectedStar.index}
        text={rating}
      >
        <RatingIcon
          key={starIndex}
          index={starIndex}
          onMouseOver={onMouseOver}
          onClick={onClick}
          starType={starType}
          size={size}
          color={color}
        />
      </Tooltip>
    )
  }

  return (
    <Container>
      <RatingStyled onMouseLeave={onMouseLeave}>
        {Array(5)
          .fill()
          .map((_, starIndex) => getStar(starIndex + 1))}
      </RatingStyled>
      <RatingInfo>({rating})</RatingInfo>
    </Container>
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
