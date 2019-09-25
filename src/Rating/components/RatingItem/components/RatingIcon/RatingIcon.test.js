import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import RatingIcon from './RatingIcon'

const renderComponent = ({
  index = 0,
  type = 'empty',
  size = 30,
  color = 'red'
} = {}) =>
  render(<RatingIcon index={index} type={type} size={size} color={color} />)

describe('RatingIcon', () => {
  it('renders without crashing', () => {
    renderComponent()
  })
})
