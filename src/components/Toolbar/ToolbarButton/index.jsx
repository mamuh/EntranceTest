import React, { Component } from 'react'
import { Button, Test } from './styles';

export default class ToolbarButton extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     windowVisible: false
  //   }
  // }

  handleClick = () => {
    const { changeTitle, addNumber, setActiveButton, index, data } = this.props
    changeTitle(index.toString())
    addNumber(index)
    setActiveButton(data.name)
  }

  render() {
    const { data, index, changeTitle } = this.props
    return (
      <Test>
      <Button onClick={this.handleClick}>
        <img src={data.src} alt={data.name} />
      </Button>
        {this.props.activeButton == data.name ? <div>hi!</div> : null }
      </Test>
    )
  }

}
