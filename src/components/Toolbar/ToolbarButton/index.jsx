import React, { Component } from 'react'
import { Button, Container } from './styles'

export default class ToolbarButton extends Component {
  handleClick = () => {
    const { addNumber, index, updateArchive, changeTitle } = this.props
    addNumber(index)
    updateArchive(index)
    changeTitle(index)
  }

  render() {
    const { data, index } = this.props
    return (
      <Container>
        <Button onClick={this.handleClick}>
          <img src={data.src} alt={data.name} />
        </Button>
        <span className="tooltiptext">{index}</span>
      </Container>
    )
  }

}
