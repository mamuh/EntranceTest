import React, { Component } from 'react'
import { Container } from './styles'
import TitleDisplay from './TitleDisplay'
import NumberDisplay from './NumberDisplay'

export default class Board extends Component {
  render() {
    const { numbers, title, titlesArchive } = this.props
    return (
      <Container>
        <TitleDisplay title={title} />
        <NumberDisplay numbers={numbers} titlesArchive={titlesArchive} />
      </Container>
    )
  }
}
