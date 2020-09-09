import React, { Component } from 'react'
import { Container } from './styles'

export default class NumberDisplay extends Component {
  render() {
    const { numbers, titlesArchive } = this.props
    return (
      <Container>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>
              <h4>{number}</h4>
              <div className="title-history">
                <p className="header">Previous title</p>
                <p>{titlesArchive[index]}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}
