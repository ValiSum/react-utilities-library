/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import {
  faStar as fullStar,
  faStarHalfAlt as halfStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const RatingIcon = () => (
  <Container>
    <LeftHalfOfIcon onMouseOver={() => console.log('LEFT')} />
    <RightHalfOfIcon onMouseOver={() => console.log('RIGHT')} />
    <FontAwesomeIcon icon={fullStar} />
  </Container>
)

export default RatingIcon
