import React, { Component } from 'react'
import { Container } from './styles'

export default class NumberDisplay extends Component {
  componentDidMount() {
    console.log('hi')
  }

  render() {
    const { numbers, titlesArchive } = this.props
    return (
      <Container>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>
              <h4>{number}</h4>
              <p>Previous title</p>
              <p>{titlesArchive[index]}</p>
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}
