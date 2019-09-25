---
to: <%= path %>/<%= name %>/<%= name %>.mdx
---
---
name: <%= name %>
route: /<%= name %>
menu: Components
---

import { Props, Playground } from 'docz'
import { <%= name %> } from './'

# <%= name %>

Description for <%= name %> component

### Props

<Props of={<%= name %>} />

### Usage

<Playground
  style={{
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <<%= name %> />
</Playground>
