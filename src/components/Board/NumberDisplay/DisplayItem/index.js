import React, { Component } from 'react'
import { Container } from './styles'

export default class DisplayItem extends Component {
  render() {
    const { number, titlesArchive, index } = this.props
    return (
      <Container>
        <div className={`left-number number-${number}`}>
          <h4>{number}</h4>
        </div>
        <div className="title-info">
          <p className="header"><b>PREVIOUS TITLE</b></p>
          <p className="prev-title">{titlesArchive[index]}</p>
        </div>
      </Container>
    )
  }
}
