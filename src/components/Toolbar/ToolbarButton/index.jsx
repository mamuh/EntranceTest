import React, { Component } from 'react'
import { Button, Container } from './styles'

export default class ToolbarButton extends Component {
  handleClick = () => {
    const { addNumber, index, updateArchive, changeTitle } = this.props
    addNumber(index)
    changeTitle(index)
    updateArchive(index)
  }

  render() {
    const { data, index, changeTitle, previousTitle } = this.props
    return (
      <Container>
        <Button onClick={this.handleClick}>
          <img src={data.src} alt={data.name} />
        </Button>
      </Container>
    )
  }

}
