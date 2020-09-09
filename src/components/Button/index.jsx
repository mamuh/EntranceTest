import React, { Component } from 'react'
import { Button } from './styles';

export default class ToolbarButton extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title : "This is the first title : "
  //   }
  // }

  handleClick = () => {
    const index = 4
    const buttonName = this.props.data.name
    this.props.changeTitle(buttonName)
  }

  render() {
    const { data, index, changeTitle } = this.props
    return (
      <Button onClick={this.handleClick} ref={(ref) => this.button = ref}>
        <img src={data.src} alt={data.name} />
        {index}
      </Button>
    )
  }

}
