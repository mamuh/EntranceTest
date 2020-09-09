import React, { Component } from 'react'
import ToolbarButton from './ToolbarButton'
import { Container } from './styles'

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: "",
    }
  }

  setActiveButton = (buttonName) => {
    this.setState({activeButton: buttonName})
  }

  render() {
    // CHANGE THIS!! TEMPORARY
    const buttons = [
      { name: "postit", src: "paper.svg" },
      { name: "text", src: "text.svg" },
      { name: "square", src: "square.svg" },
      { name: "pencil", src: "draw.svg" },
      { name: "landscape", src: "landscape.svg" },
      { name: "align", src: "align.svg" },
    ]

    const { changeTitle, addNumber, previousTitle } = this.props

    return (
     <Container>
      <ul>
        {buttons.map((button, index) => (
          <li key={index}>
            <ToolbarButton
              index={index+1}
              data={button}
              changeTitle={changeTitle}
              addNumber={addNumber}
              setActiveButton={this.setActiveButton}
              activeButton={this.state.activeButton}
              previousTitle={previousTitle}
            />
          </li>
        ))}
      </ul>
     </Container>
    )
  }
}
