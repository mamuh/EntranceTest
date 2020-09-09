import React, { Component } from 'react'
import ToolbarButton from './ToolbarButton'
import { Container } from './styles';

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

    return (
     <Container>
      <ul>
        {buttons.map((button, index) => (
          <li key={index}>
            <ToolbarButton
              index={index+1}
              data={button}
              changeTitle={this.props.changeTitle}
              addNumber={this.props.addNumber}
              setActiveButton={this.setActiveButton}
              activeButton={this.state.activeButton}
            />
          </li>
        ))}
      </ul>
     </Container>
    )
  }
}
