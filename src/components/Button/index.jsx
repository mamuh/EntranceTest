import React, { Component } from 'react'
import { Button } from './styles';

export default class ToolbarButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // title : "This is the first title : "
    }
  }

  render() {
    const { data, index } = this.props
    return (
      <Button>
        <img src={data.src} alt={data.name} />
      </Button>
    )
  }

}
