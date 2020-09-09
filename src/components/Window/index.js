import React, { Component } from 'react'
import { Container } from './styles'

export default class Window extends Component {
  render() {
    return (
     <Container>
      <p>Previous title: {this.props.previousTitle}</p>
      <p>Number added: {this.props.number}</p>
     </Container>
    )
  }
}
