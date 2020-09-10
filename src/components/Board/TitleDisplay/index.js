import React, { Component } from 'react'
import { Container } from './styles'

export default class TitleDisplay extends Component {
  render() {
    return (
      <Container>
        <h1>{this.props.title}</h1>
      </Container>
    )
  }
}
