import React, { Component } from 'react'
import { Container } from './styles'
import { AnimatedList } from 'react-animated-list'
import DisplayItem from './DisplayItem'

export default class NumberDisplay extends Component {
  scrollToBottom = () => {
    this.listEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { numbers, titlesArchive } = this.props
    return (
      <Container>
        <ul>
        <AnimatedList animation={"grow"}>
          {numbers.map((number, index) => (
            <li key={index}>
              <DisplayItem
                number={number}
                titlesArchive={titlesArchive}
                index={index}
              />
            </li>
          ))}
        </AnimatedList>
        <div style={{ float:"left", clear: "both" }}
          ref={(el) => { this.listEnd = el; }}>
        </div>
        </ul>
      </Container>
    )
  }
}
