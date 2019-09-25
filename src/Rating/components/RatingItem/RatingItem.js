import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tooltip from './components/Tooltip'
import RatingIcon from './components/RatingIcon'

const RatingItem = ({
  itemIndex,
  overedItemIndex,
  overedItemType,
  rating,
  onMouseOver,
  onClick,
  size,
  color
}) => {
  const numberOfFullItems = Math.floor(overedItemIndex)
  let itemType = 'empty'

  if (itemIndex < numberOfFullItems) {
    itemType = 'full'
  } else if (itemIndex === numberOfFullItems) {
    itemType = overedItemType
  }

  return (
    <Tooltip key={itemIndex} show={itemIndex === overedItemIndex} text={rating}>
      <RatingIcon
        key={itemIndex}
        index={itemIndex}
        onMouseOver={onMouseOver}
        onClick={onClick}
        type={itemType}
        size={size}
        color={color}
      />
    </Tooltip>
  )
}

export default RatingItem
