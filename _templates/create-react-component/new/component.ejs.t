---
to: <%= path %>/<%= name %>/<%= name %>.js
---
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Describe your component. It will be shown in docz if you add a <%= name %>.mdx in the same folder level
 */
const <%= name %> = ({ }) => (
  <div>
    Hello from <%= name %>
  </div>
)

<%= name %>.propTypes = {}

<%= name %>.defaultProps = {}

export { <%= name %> }
