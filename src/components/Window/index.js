import React, { Component } from 'react'
import { Container } from './styles'

export default class Window extends Component {
  render() {
    return (
     <Container>
      <div className="section">
        <p className="header">PREVIOUS TITLE</p>
        <p>{this.props.previousTitle}</p>
      </div>
     </Container>
    )
  }
}

      // <div className="section">
      //   <p className="header">NUMBER ADDED</p>
      //   <p>{this.props.number}</p>
      // </div>
