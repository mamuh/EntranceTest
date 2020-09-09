import React, { Component } from 'react'
import { Button, Test } from './styles';

export default class ToolbarButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowVisible: true
    }
  }

  handleClick = () => {
    const { changeTitle, addNumber, index } = this.props
    changeTitle(index.toString())
    addNumber(index)
  }

  render() {
    const { data, index, changeTitle } = this.props
    return (
      <Test>
      <Button onClick={this.handleClick}>
        <img src={data.src} alt={data.name} />
      </Button>
      {this.state.windowVisible ? <div>hi!</div> : null }
      </Test>
    )
  }

}
