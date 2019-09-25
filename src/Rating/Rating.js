import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getRating } from './utils/getRating'
import RatingItem from './components/RatingItem'

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

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) func()
    else didMount.current = true
  }, deps)
}

const Rating = ({ size, color, onRating }) => {
  const [overedItem, setOveredItem] = useState({
    index: 0,
    type: 'empty'
  })
  const [clickedItem, setClickedItem] = useState({
    index: 0,
    type: 'empty'
  })
  const [rating, setRating] = useState(0)

  const onMouseOver = starSelected => setOveredItem(starSelected)

  const onMouseLeave = () => setOveredItem(clickedItem)

  const onClick = () => setClickedItem(overedItem)

  useDidMountEffect(() => {
    setRating(getRating(overedItem))
  }, [overedItem])

  useDidMountEffect(() => {
    onRating(rating)
  }, [clickedItem])

  const getRatingItems = () =>
    Array(5)
      .fill()
      .map((_, index) => (
        <RatingItem
          key={index + 1}
          itemIndex={index + 1}
          overedItemIndex={overedItem.index}
          overedItemType={overedItem.type}
          rating={rating}
          onMouseOver={onMouseOver}
          onClick={onClick}
          size={size}
          color={color}
        />
      ))

  return (
    <Container>
      <RatingStyled onMouseLeave={onMouseLeave}>
        {getRatingItems()}
      </RatingStyled>
      <RatingInfo>({rating})</RatingInfo>
    </Container>
  )
}

Rating.propTypes = {
  /** Star size */
  size: PropTypes.number,
  /** Star color */
  color: PropTypes.string,
  /** Function */
  onRating: PropTypes.func
}

Rating.defaultProps = {
  size: 30,
  color: 'orange',
  onRating: Function.prototype
}

export { Rating }
