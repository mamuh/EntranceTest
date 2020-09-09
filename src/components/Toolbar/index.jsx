import React, { Component } from 'react'
import ToolbarButton from '../Button'
import { Container } from './styles';

export default class Toolbar extends Component {
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
          <li>
            <ToolbarButton
              index={index+1}
              data={button}
              changeTitle={this.props.changeTitle}
            />
          </li>
        ))}
      </ul>
     </Container>
    )
  }
}
