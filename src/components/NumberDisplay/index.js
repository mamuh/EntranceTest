import React, { Component } from 'react'
import { Container } from './styles';

export default class Toolbar extends Component {
  render() {
    const { numbers } = this.props
    return (
      <Container>
        <ul>
          {numbers.map((number, index) => (
            <h4 key={index}>{number}</h4>
          ))}
        </ul>
      </Container>
    )
  }
}
