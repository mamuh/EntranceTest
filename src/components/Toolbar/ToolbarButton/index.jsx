import React, { Component } from 'react'
import { Button, Container } from './styles'
import Window from '../../Window'

export default class ToolbarButton extends Component {
  handleClick = () => {
    const { changeTitle, addNumber, setActiveButton, index, data } = this.props
    changeTitle(index)
    addNumber(index)
    setActiveButton(data.name)
  }

  render() {
    const { data, index, changeTitle, previousTitle } = this.props
    return (
      <Container>
        <Button onClick={this.handleClick}>
          <img src={data.src} alt={data.name} />
        </Button>
        {this.props.activeButton == data.name ? <Window previousTitle={previousTitle} number={index} /> : null }
      </Container>
    )
  }

}

