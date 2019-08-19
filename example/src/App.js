import React, { Component } from 'react'

import { Button, Rating } from 'react-utilities-library'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button name="Mi boton" />
        <br />
        <Rating />
      </div>
    )
  }
}
