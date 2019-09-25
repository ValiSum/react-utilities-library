---
to: <%= path %>/<%= name %>/<%= name %>.test.js
---
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import <%= name %> from './<%= name %>'

const renderComponent = ({ ...props } = {}) => render(<<%= name %> {...props} />)

describe('<%= name %>', () => {
  it('renders without crashing', () => {
    renderComponent()
  })
})
